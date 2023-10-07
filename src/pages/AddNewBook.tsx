import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "react-hot-toast";

import { IBook } from "../types/IBook";

export default function AddNewBook() {
  const { register, handleSubmit } = useForm<IBook>();

  const onSubmit: SubmitHandler<IBook> = async (bookData) => {
    bookData;
    console.log(bookData);
    toast.success("book");
  };

  return (
    <div className="lg:h-[calc(100vh-7rem)]  flex items-center justify-center mt-5 ">
      <form
        className="box-shadow-form   w-[35rem]  grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 my-5  ">
          Add New Book
        </h1>

        <div className=" ">
          <label htmlFor="">Title:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Title"
              required
              {...register("Author")}
            />
          </div>
        </div>

        <div className=" ">
          <label htmlFor="">Author:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Author"
              required
              {...register("Author")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Genre:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Genre"
              required
              {...register("Genre")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Image Url:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Image Url"
              required
              {...register("Image")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Publication Date:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Publication Date"
              type="date"
              required
              {...register("PublicationDate")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="status">Status:</label>
          <div className="grid">
            <select
              id="status"
              {...register("status")} // Use the correct name here
              className="border border-slate-400 rounded p-2"
              required
            >
              <option value="In Stock">In Stock</option>
              <option value="Out Of Stock">Out Of Stock</option>
            </select>
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Publication Date:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Publication Date"
              type="date"
              required
              {...register("PublicationDate")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Rating</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Publication Date"
              type="number"
              required
              {...register("rating")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Copies</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Publication Date"
              type="number"
              required
              {...register("copies")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">price</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Publication Date"
              type="number"
              required
              {...register("price")}
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Add  Book" />
      </form>
    </div>
  );
}
