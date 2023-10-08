import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "react-hot-toast";

import { IBook } from "../types/IBook";
import { useAppSelector } from "../hooks/hook";
import { usePostBookMutation } from "../redux/features/book/bookApi";

export default function AddNewBook() {
  const { register, handleSubmit, reset } = useForm<IBook>();
  const { email } = useAppSelector((state) => state?.auth?.user);
  const [postBook] = usePostBookMutation();

  const onSubmit: SubmitHandler<IBook> = async (bookData) => {
    await postBook(bookData)
      .unwrap()
      .then(() => {
        toast.success("successfully Book Added");
      })
      .catch((error) => {
        console.log(error, "catch");
        toast.error("Something Went Wrong.Please Try Again");
      });
    reset();
  };

  return (
    <div className="mt-5 flex items-center justify-center extraSm:my-5 ">
      <form
        className="box-shadow-form   w-[35rem]  grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 my-5  ">
          Add New Book
        </h1>
        <div className=" ">
          <label htmlFor="">Email:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Email"
              type="email"
              required
              {...register("Email")}
              value={email}
              readOnly
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Title:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Title"
              required
              {...register("Title")}
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

        <input className="submit-button" type="submit" value="Add  Book" />
      </form>
    </div>
  );
}
