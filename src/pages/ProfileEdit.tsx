import { SubmitHandler, useForm } from "react-hook-form";

import { ISignUpData } from "../types/IUser";
import { useAppSelector } from "../hooks/hook";
import {
  useGetUserByEmailQuery,
  useUpdateUserMutation,
} from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProfileEdit() {
  const { email } = useAppSelector((state) => state.auth.user);

  const { data } = useGetUserByEmailQuery(email);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<ISignUpData>();
  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<ISignUpData> = async (payload) => {
    console.log(payload);
    const updateData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      designation: payload.designation || "",
      contactNumber: payload.contactNumber,
      address: payload.address,
      gender: payload.gender,
    };
    const userId = data?.data?.id;
    await updateUser({ userId, updateData })
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/dashboard/profile");
        console.log(payload);

        console.log(payload);
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
    reset();
  };

  return (
    <div className="my-10 ">
      <form
        className="   extraSm:text-xs lg:text-sm grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 ">
          Edit Your Profile
        </h1>

        <div className=" ">
          <label htmlFor="">Your First Name</label>
          <div className="grid">
            <input
              className="border text-black border-slate-400 rounded:lg p-2"
              placeholder="Your FirstName"
              autoFocus
              defaultValue={data?.data?.firstName}
              {...register("firstName")}
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Your Last Name</label>
          <div className="grid">
            <input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="text"
              placeholder="Your Last Name"
              defaultValue={data?.data?.lastName}
              {...register("lastName")}
              autoFocus
            />
          </div>
        </div>
        {data?.data?.role !== "customer" && (
          <div className=" ">
            <label htmlFor="">Your Designation</label>
            <div className="grid">
              <input
                className="border w-full text-black border-slate-400 rounded p-2"
                type="text"
                placeholder="Your Designation"
                defaultValue={data?.data?.designation}
                {...register("designation")}
                autoFocus
              />
            </div>
          </div>
        )}

        <div className="  ">
          <label htmlFor="">Your Contact Number</label>
          <div className="grid">
            <input
              className="border w-full text-black border-slate-400 rounded p-2"
              type=""
              placeholder="Your Contact Number"
              defaultValue={data?.data?.contactNumber}
              {...register("contactNumber")}
              autoFocus
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Your Address</label>
          <div className="grid">
            <input
              className="border w-full text-black border-slate-400 rounded p-2"
              type=""
              placeholder="Your Address Number"
              defaultValue={data?.data?.address}
              {...register("address")}
              autoFocus
            />
          </div>
        </div>
        <div className="grid justify-center ">
          <label className="lg:w-96 extraSm:w-60  extraSm:text-center lg:text-start grid mx-auto">
            Gender:
          </label>

          <div className=" flex gap-3">
            <div>
              <input
                type="radio"
                value="male"
                defaultChecked={data?.data?.gender === "male"}
                {...register("gender")}
                id="maleRadio"
              />
              <label>male</label>
            </div>
            <div className="">
              <input
                type="radio"
                value="female"
                defaultChecked={data?.data?.gender === "female"}
                {...register("gender")}
                id="femaleRadio"
              />
              <label>female</label>
            </div>
          </div>
        </div>
        <input
          className=" bg-blue-700 leading-8 w-1/2 mx-auto"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
}
