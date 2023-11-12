import { useForm } from "react-hook-form";
import { ISignInData } from "../types/IUser";
import { useSignInMutation } from "../redux/features/auth/authApi";
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

    .required("Password is required"),
});

export default function SignUp() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  const [login] = useSignInMutation();
  const navigate = useNavigate();

  const onSubmit = async (userData: ISignInData) => {
    await login(userData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);

        dispatch(setUser(payload?.data));
        reset();

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
        className="box-shadow-form   w-[35rem]  grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Sign In</h1>

        <div className=" ">
          <label htmlFor="">Email:</label>
          <div className="grid">
            <Input
              className="border border-slate-400 rounded p-2"
              name="email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              defaultValue={""}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <div className=" ">
          <label htmlFor="">Passowrd:</label>
          <div className="grid">
            <Input
              className="border border-slate-400 rounded p-2"
              name="password"
              type="password"
              placeholder="Password"
              error={errors.password?.message}
              defaultValue={""}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <input className="submit-button" type="submit" value="Sign In" />
      </Form>
    </div>
  );
}
