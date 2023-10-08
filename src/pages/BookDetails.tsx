import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import { useRef } from "react";
import { IReview } from "../types/IBook";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBookQuery(id);

  const textValue = useRef<HTMLTextAreaElement>(null);

  const formattedPublicationDate = new Date(
    data?.data?.PublicationDate
  ).toLocaleDateString();
  console.log(data?.data);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const handleSubmit = () => {
    if (textValue.current) {
      const textareaValue = textValue.current.value;
      console.log("Textarea Value:", textareaValue);
      textValue.current.value = "";
    }
    // Use textareaValue here
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
              {data?.data?.reviews.map((review: IReview, index: number) => (
                <>
                  <li className=" text-lime-700 text-sm" key={index}>
                    {review.email}:
                    <span className="text-black">{review.reveiw}</span>
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
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
      </div>
    </div>
  );
};

export default BookDetails;