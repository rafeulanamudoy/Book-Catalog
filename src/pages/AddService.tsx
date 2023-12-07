import { useForm } from "react-hook-form";

import { useAppSelector } from "../hooks/hook";
import { useGetUserByEmailQuery } from "../redux/features/auth/authApi";

import { IService } from "../types/IService";
import { useState } from "react";
import { useGetCategoriesQuery } from "../redux/features/category/categoryApi";
import { ICategory } from "../types/ICategory";
import { useAddServiceMutation } from "../redux/features/service/serviceApi";
import toast from "react-hot-toast";
import Form from "../reactHookForm/Form";
import Input from "../reactHookForm/Input";

export default function AddService() {
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected category title
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [postService] = useAddServiceMutation();

  const { data: categoryData, isLoading } = useGetCategoriesQuery(undefined);
  const [availability, setAvailability] = useState("");

  const { email } = useAppSelector((state) => state.auth.user);

  const { data } = useGetUserByEmailQuery(email);

  const { register, handleSubmit, setValue, reset } = useForm<IService>();

  const onSubmit = async (payload: IService) => {
    console.log(payload);
    const parsePrice = parseFloat(payload.price as unknown as string);
    const postData = {
      name: payload.name,
      image: payload.image,
      description: payload.description,
      serviceStatus: availability,
      price: parsePrice,

      categoryId: selectedCategoryId,
    };
    if (availability && selectedCategoryId && parsePrice) {
      postService(postData)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          reset();
        })
        .catch((error) => {
          console.log(error, "catch");

          toast.error(error?.data?.message);
        });

      console.log(postData);
    }
  };
  let categoryOptions;

  if (isLoading || !data) {
    categoryOptions = <option value="">Loading categories...</option>;
  } else {
    // If data is available, map over the categories and generate options
    categoryOptions = (
      <>
        <option> choose</option>
        {categoryData?.data?.map((category: ICategory) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </>
    );
  }
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryTitle = e.target.value;
    setSelectedCategory(selectedCategoryTitle);

    // Find the corresponding categoryId for the selected category title
    const selectedCategoryObject = categoryData?.data?.find(
      (category: ICategory) => category.title === selectedCategoryTitle
    );

    // Set the selectedCategoryId based on the selected category
    if (selectedCategoryObject) {
      setSelectedCategoryId(selectedCategoryObject.id);
    }

    setValue("category.title", selectedCategoryTitle);
  };

  console.log(selectedCategory, selectedCategoryId);

  return (
    <div className="my-10 ">
      <Form
        className="   extraSm:text-xs lg:text-sm grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Add Service</h1>

        <div className=" ">
          <label htmlFor="">Provide Service Name</label>
          <div className="grid">
            <input
              className="border text-black border-slate-400 rounded:lg p-2"
              placeholder=" Service Name"
              autoFocus
              {...register("name")}
              required
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Provide Image Url</label>
          <div className="grid">
            <Input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="text"
              placeholder="image"
              name="image"
              register={register}
              autoFocus
              required
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Provide Price of Service</label>
          <div className="grid">
            <Input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="number"
              placeholder="Price"
              name="price"
              defaultValue={data?.data?.contactNumber}
              register={register}
              autoFocus
              required
            />
          </div>
        </div>
        <div className="  ">
          <label htmlFor="">Provide Description</label>
          <div className="grid">
            <Input
              className="border w-full text-black border-slate-400 rounded p-2"
              placeholder="Description"
              textarea={true}
              defaultValue={data?.data?.contactNumber}
              name="description"
              register={register}
              autoFocus
              required
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Choose Category</label>

          <div className="mb-4">
            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={handleCategory}
              className="w-full text-black"
              required
            >
              {categoryOptions}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="availabilityFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Product Availability:
          </label>
          <select
            id="availabilityFilter"
            required
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full text-black"
          >
            <option value="">choose</option>
            <option value="available">Available</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <input
          className=" bg-blue-700 leading-8 w-1/2 mx-auto"
          type="submit"
          value="ADD"
        />
      </Form>
    </div>
  );
}
