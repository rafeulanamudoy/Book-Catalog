import { useForm, SubmitHandler } from "react-hook-form";
import { ISignUpData } from "../types/IUser";
import { useSignUpMutation } from "../redux/api/authApi";
import { toast } from "react-hot-toast";

export default function SignUp() {
  const { register, handleSubmit, reset } = useForm<ISignUpData>();

  const [postUserData] = useSignUpMutation();

  const onSubmit: SubmitHandler<ISignUpData> = async (userData) => {
    const { confirmPassword, ...others } = userData;

    if (confirmPassword !== others.password) {
      toast.error("password doesnt match");
      return;
    }

    await postUserData(others)
      .unwrap()
      .then((payload) => {
        console.log(payload, "then function");
        toast.success("successfully signUp");
        reset();
      })
      .catch((error) => {
        console.log(error.data.message, "catch");
        toast.error("email already exist");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        className="box-shadow-form   w-[35rem]  grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600">Sign Up</h1>
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

        <button className="submit-button " type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

//  <div className="grid grid-rows-2 ">
//           <label htmlFor="">Address</label>
//           <div className="grid grid-rows-3   gap-y-3 ">
//             <div className="grid gap-x-3 grid-cols-2">
//               <input
//                 className="border border-slate-400 rounded p-2"
//                 placeholder="Street"
//                 required
//                 {...register("address.street")}
//               />
//               <input
//                 className="border border-slate-400 rounded p-2"
//                 placeholder="City"
//                 required
//                 {...register("address.city")}
//               />
//             </div>

//             <div className="grid gap-x-3 grid-cols-2">
//               <input
//                 className="border border-slate-400 rounded p-2"
//                 placeholder="District"
//                 required
//                 {...register("address.district")}
//               />
//               <input
//                 className="border border-slate-400 rounded p-2"
//                 placeholder="Division"
//                 required
//                 {...register("address.division")}
//               />
//             </div>

//             <div className="grid ">
//               <input
//                 className="border border-slate-400 rounded p-2"
//                 placeholder="Postal"
//                 required
//                 {...register("address.postal")}
//               />
//             </div>
//           </div>
