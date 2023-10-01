import { useForm, SubmitHandler } from "react-hook-form";
import { ISignInData } from "../types/IUser";
import { useSignInMutation } from "../redux/features/auth/authApi";
import { toast } from "react-hot-toast";

import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../hooks/hook";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { register, handleSubmit } = useForm<ISignInData>();

  const [loginUserData] = useSignInMutation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignInData> = async (userData) => {
    await loginUserData(userData)
      .unwrap()
      .then((payload) => {
        toast.success("successfully Login");
        dispatch(setUser(payload?.data?.email));
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "catch");
        toast.error(error.data.message);
      });
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form
        className="box-shadow-form   w-[35rem]  grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Sign In</h1>

        <div className="">
          <label htmlFor="">Email:</label>
          <div className="grid ">
            <input
              className="border border-slate-400 rounded p-2"
              type="email"
              placeholder="
      Email"
              required
              {...register("email")}
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

        <input className="submit-button" type="submit" value="Sign In" />
      </form>
    </div>
  );
}
