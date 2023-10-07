import { useForm, SubmitHandler } from "react-hook-form";
import { ISignUpData } from "../types/IUser";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { toast } from "react-hot-toast";

import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../hooks/hook";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { register, handleSubmit } = useForm<ISignUpData>();

  const [postUserData] = useSignUpMutation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignUpData> = async (userData) => {
    const { confirmPassword, ...others } = userData;

    if (confirmPassword !== others.password) {
      toast.error("password doesnt match");
      return;
    }

    await postUserData(others)
      .unwrap()
      .then((payload) => {
        toast.success("successfully signUp");
        dispatch(setUser(payload?.data?.email));
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "catch");
        toast.error("Email Already Exist");
      });
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form
        className="box-shadow-form   w-[35rem]  grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Sign Up</h1>
        <div className="">
          <label htmlFor="">Full Name:</label>

          <div className=" grid grid-cols-2  gap-x-4">
            <input
              className="border border-slate-400 rounded p-2    "
              placeholder="First Name"
              required
              {...register("name.firstName")}
            />
            <input
              placeholder="Last Name"
              className="border border-slate-400 rounded p-2"
              required
              {...register("name.lastName")}
            />
          </div>
        </div>

        <div className=" ">
          <label htmlFor="">Email:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Email"
              type="email"
              required
              {...register("email")}
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="">Phone Number:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Phone Number"
              required
              {...register("phoneNumber")}
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Passowrd:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Password"
              required
              {...register("password")}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="">Confirm Password:</label>
          <div className="grid">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="enter your confirm Password"
              {...register("confirmPassword")}
              required
            />
          </div>
        </div>
        <div className=" ">
          <label htmlFor="">Address</label>
          <div className="grid grid-cols-2 gap-3   ">
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Street"
              required
              {...register("address.street")}
            />
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="City"
              required
              {...register("address.city")}
            />

            <input
              className="border border-slate-400 rounded p-2"
              placeholder="District"
              required
              {...register("address.district")}
            />
            <input
              className="border border-slate-400 rounded p-2"
              placeholder="Division"
              required
              {...register("address.division")}
            />

            <input
              className="border border-slate-400 rounded p-2 col-span-2"
              placeholder="Postal"
              required
              {...register("address.postal")}
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
