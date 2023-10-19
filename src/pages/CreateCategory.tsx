import { useForm } from "react-hook-form";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../reactHookForm/Form";
import Input from "../reactHookForm/Input";

import { ICategory } from "../types/ICategory";
import { useCreateCategoryMutation } from "../redux/features/category/categoryApi";
import toast from "react-hot-toast";

const categorySchema = yup.object().shape({
  title: yup.string().required("category title is required"),
});

export default function CreateCategory() {
  const [postCategory] = useCreateCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(categorySchema) });

  const onSubmit = async (categoryData: ICategory) => {
    console.log(categoryData);
    postCategory(categoryData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);

        reset();
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
  };

  return (
    <div className=" h-[calc(100vh-7rem)]  flex items-center justify-center ">
      <Form
        className="box-shadow-form  bg-teal-50  w-[35rem]  grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl text-orange-600 ">
          Create Category
        </h1>

        <div className=" ">
          <label htmlFor="">Provide Category Title:</label>
          <div className="grid">
            <Input
              className="border text-black border-slate-400 rounded p-2"
              name="title"
              type="text"
              placeholder="Enter Category Name"
              error={errors.title?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Create" />
      </Form>
    </div>
  );
}
