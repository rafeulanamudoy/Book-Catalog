import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteSingleBookMutation,
  useGetSingleBookQuery,
  useUpdateReviewMutation,
} from "../redux/features/book/bookApi";
import { useRef } from "react";
import { IReview } from "../types/IBook";
import { useAppSelector } from "../hooks/hook";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteBook] = useDeleteSingleBookMutation();

  const { data, isLoading } = useGetSingleBookQuery(id, {
    pollingInterval: 1000,
  });
  const { email } = useAppSelector((state) => state.auth.user);

  const [updateReview] = useUpdateReviewMutation();

  const textValue = useRef<HTMLTextAreaElement>(null);

  const formattedPublicationDate = new Date(
    data?.data?.PublicationDate
  ).toLocaleDateString();
  //console.log(data?.data);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const handleSubmit = async () => {
    if (textValue.current) {
      const textareaValue = textValue.current.value;
      const userReview = {
        review: {
          email: email,
          reveiw: textareaValue,
        },
      };
      const bookId = data?.data?._id;
      await updateReview({ bookId, userReview });

      console.log("Textarea Value:", textareaValue);
      textValue.current.value = "";
    }
    // Use textareaValue here
  };

  const handleDelete = async () => {
    const confirm = window.confirm("are your sure you want to delete");
    console.log(confirm);

    if (confirm) {
      await deleteBook(data?.data?._id)
        .unwrap()
        .then(() => {
          toast.success("deleted successfully");
          navigate("/home");
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      toast.error("you have confirm not to delete the book");
    }
  };

  return (
    <div className="singleBookCart mt-5 mx-auto lg:grid lg:grid-cols-2 gap-x-5 w-1/2 lg:text-lg extraSm:text-xs ">
      <div>
        <img className=" h-full" src={data?.data?.Image} alt="" />
      </div>

      <div className="">
        <p>
          <span className="text-orange-600">Title</span>:{data?.data?.Title}
        </p>
        <p>
          {" "}
          <span className="text-orange-600">Author</span>:{data?.data?.Author}
        </p>
        <p>
          {" "}
          <span className="text-orange-600">Genre</span>:{data?.data?.Genre}
        </p>
        <p>
          {" "}
          <span className="text-orange-600">PublicationDate</span>:
          {formattedPublicationDate}
        </p>

        <div className="  h-auto">
          <h3>
            {" "}
            <span className=" text-lime-700">Reviews</span>:
          </h3>
          {data?.data?.reviews.length === 0 ? (
            <p>No reviews available.</p>
          ) : (
            <ul>
              {data?.data?.reviews.map((review: IReview) => (
                <li className=" text-lime-700 text-sm" key={review._id}>
                  {review.email}:
                  <span className="text-black">{review.reveiw}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {email && (
          <>
            <span>Add a Comment:</span>
            <div className="grid grid-rows-3  gap-y-3">
              <textarea
                ref={textValue}
                className="border resize-none border-gray-400  rounded w-5/6"
              />
              <button
                onClick={handleSubmit}
                className="  bg-orange-700  text-white text-xs w-1/3 h-1/2 justify-self-start text-center border border-indigo-600"
              >
                Submit
              </button>
            </div>
          </>
        )}

        {email === data?.data?.Email && (
          <div className="grid grid-cols-2 gap-3 w-1/2   text-white xl:text-lg  lg:text-sm">
            <Link
              state={{ bookData: data?.data }}
              to="/bookEdit"
              className=" bg-cyan-600 rounded mb-10 text-center  text-white "
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className=" bg-fuchsia-800 rounded  mb-10  "
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
