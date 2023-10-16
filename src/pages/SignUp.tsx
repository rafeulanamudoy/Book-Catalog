import { useForm } from "react-hook-form";
import { ISignUpData } from "../types/IUser";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../reactHookForm/Form";
import Input from "../reactHookForm/Input";
import { useAppDispatch } from "../hooks/hook";
import { setUser } from "../redux/features/auth/authSlice";

const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()

    .required("Confirm Password is required"),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });
  const dispatch = useAppDispatch();

  const [postUserData] = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmit = async (userData: ISignUpData) => {
    const { confirmPassword, ...others } = userData;

    if (confirmPassword !== others.password) {
      toast.error("password doesnt match");
      return;
    }

    reset();
    console.log(others);
    await postUserData(others)
      .unwrap()
      .then((payload) => {
        console.log(payload);
        toast.success(payload?.message);
        dispatch(setUser(payload?.data));
        console.log(payload);
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
  };

  return (
    <div className=" h-[calc(100vh-7rem)] flex items-center justify-center ">
      <Form
        className="box-shadow-form   lg:w-[45rem] extraSm:w-[25rem]  grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Sign Up</h1>

        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Email:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 border-slate-400 rounded p-2"
              name="email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <div className="  grid justify-center ">
          <label className=" lg:w-96  grid  mx-auto" htmlFor="">
            Passowrd:
          </label>
          <div className="">
            <Input
              className="border  lg:w-96 border-slate-400 rounded p-2 "
              name="password"
              type="password"
              placeholder="Password"
              error={errors.password?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Confirm Password:
          </label>
          <div className="">
            <Input
              className="border lg:w-96 border-slate-400 rounded p-2"
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
              autoFocus
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Sign Up" />
      </Form>
    </div>
  );
}
