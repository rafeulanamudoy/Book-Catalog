import { useRef } from "react";
import { useParams } from "react-router-dom";
import {
  useCreateServiceReviewMutation,
  useGetServiceByIdQuery,
} from "../redux/features/service/serviceApi";
import { IReview } from "../types/IService";
import { useAppSelector } from "../hooks/hook";
import { useGetUserByEmailQuery } from "../redux/features/auth/authApi";

export default function ServiceDetails() {
  const { id } = useParams();
  const { data } = useGetServiceByIdQuery(id as string, {
    pollingInterval: 1000,
  });
  console.log(data);
  const { email } = useAppSelector((state) => state.auth.user);
  const { data: userData } = useGetUserByEmailQuery(email);
  console.log(userData);
  const textValue = useRef<HTMLTextAreaElement>(null);
  const ratingvalue = useRef<HTMLInputElement>(null);
  const [postReview] = useCreateServiceReviewMutation();
  const handleSubmit = async () => {
    if (textValue.current && ratingvalue.current) {
      const textareaValue = textValue.current.value;
      const ratingAreaValue = parseFloat(ratingvalue.current?.value);
      const userReview = {
        rating: ratingAreaValue,
        review: textareaValue,
        userId: userData?.data?.id,
        serviceId: data?.data?.id,
      };
      postReview(userReview);
      console.log(userReview, "all data");

      //   console.log("Textarea Value:", textareaValue);
      //   console.log("Textarea Value:", ratingAreaValue);
      textValue.current.value = "";
      ratingvalue.current.value = "";
    }
    // Use textareaValue here
  };
  return (
    <div className="singleBookCart mt-5 mx-auto lg:grid lg:grid-cols-2 gap-x-5 w-1/2 lg:text-lg extraSm:text-xs ">
      <div>
        <img className=" h-full" src={data?.data?.image} alt="" />
      </div>

      <div className="">
        <p>
          <span className="text-orange-600">Service Name</span>:
          {data?.data?.name}
        </p>
        <p>
          {" "}
          <span className="text-orange-600">Service Status</span>:
          {data?.data?.serviceStatus}
        </p>
        <p>
          {" "}
          <span className="text-orange-600">Description</span>:
          {data?.data?.description}
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
                <li className=" text-lime-700 text-sm" key={review.id}>
                  {review.userId}:
                  <span className="text-black">{review.review}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {email && (
          <>
            <span>Add a Rating:</span>
            <div className="">
              <input
                type="number"
                ref={ratingvalue}
                className="border resize-none border-gray-400  rounded w-5/6"
              />
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
          </>
        )}
      </div>
    </div>
  );
}
