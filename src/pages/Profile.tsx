import { useGetUserByEmailQuery } from "../redux/features/auth/authApi";
import { useAppSelector } from "../hooks/hook";
import { Link } from "react-router-dom";

export default function Profile() {
  const { email, role } = useAppSelector((state) => state.auth.user);
  const { data } = useGetUserByEmailQuery(email);

  console.log(data);
  return (
    <div className=" mt-10 mx-auto border-4 w-1/2">
      <h1 className="text-center   text-2xl  text-yellow-200"> My Profile</h1>
      <div className=" grid   ml-5   h-96">
        <div className="grid     items-center    ">
          <h1 className="flex gap-3  items-center">
            <span className=" text-red-500 text-lg">Your Name</span>:
            <span>
              {data?.data?.firstName?.concat(" ", data.data.lastName)}
            </span>
          </h1>
          <h1 className="flex gap-3  items-center">
            <span className=" text-red-500 text-lg">Your Email:</span>:
            <span>{data?.data?.email}</span>
          </h1>
          <h1 className="flex gap-3  items-center">
            <span className=" text-red-500 text-lg">Your Gender:</span>:
            <span>{data?.data?.gender}</span>
          </h1>
          <h1 className="flex gap-3  items-center">
            <span className=" text-red-500 text-lg">Your Contact Number:</span>:
            <span>{data?.data?.contactNumber}</span>
          </h1>
          {role !== "customer" && (
            <h1 className="flex gap-3  items-center">
              <span className=" text-red-500 text-lg">Your Designation:</span>:
              <span>{data?.data?.designation}</span>
            </h1>
          )}
          <Link
            to="/dashboard/profileEdit"
            state={data}
            className="submit-button"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
