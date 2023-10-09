import { SubmitHandler, useForm } from "react-hook-form";
import { IBook } from "../types/IBook";
import { useAppSelector } from "../hooks/hook";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateSingleBookMutation } from "../redux/features/book/bookApi";

import toast from "react-hot-toast";

export default function BookEdit() {
  const { register, handleSubmit, reset } = useForm<IBook>();
  const { email } = useAppSelector((state) => state?.auth?.user);
  const location = useLocation();
  const { bookData } = location.state;
  const navigate = useNavigate();

  const [updateSingleBook] = useUpdateSingleBookMutation();

  const onSubmit: SubmitHandler<IBook> = async (payload) => {
    const bookId = bookData._id;
    const publicationDateISO = new Date(payload.PublicationDate).toISOString();
    const updateData = {
      Title: payload.Title,
      Author: payload.Author,
      Genre: payload.Genre,
      Image: payload.Image,
      PublicationDate: publicationDateISO,
    };
    //console.log(bookId, updateData);
    await updateSingleBook({ bookId, updateData })
      .unwrap()
      .then(() => {
        toast.success("succesfullt update the book");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error);
      });

    // updateSingleBook({ bookId, payload });
    //console.log("updated data", bookData);
    reset();
  };

  const formattedPublicationDate = new Date(
    bookData.PublicationDate
  ).toLocaleDateString("en-CA");
  return (
    <div className="mt-5 flex items-center justify-center extraSm:my-5 ">
      <form
        className="box-shadow-form   w-[35rem]  grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 my-5  ">
          Edit Your Book
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
              defaultValue={bookData?.Title}
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
              defaultValue={bookData?.Author}
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
              defaultValue={bookData?.Genre}
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
              defaultValue={bookData?.Image}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Publication Date:</label>
          <div className="grid">
            <input
              type="date"
              className="border border-slate-400 rounded p-2"
              required
              {...register("PublicationDate")}
              defaultValue={formattedPublicationDate}
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Edit  Book" />
      </form>
    </div>
  );
}
