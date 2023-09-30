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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          required
          {...register("name.firstName")}
        />
        <input
          placeholder="Last Name"
          required
          {...register("name.lastName")}
        />

        <input
          type="email"
          placeholder="
      Email"
          required
          {...register("email")}
        />

        <input
          placeholder="Phone Number"
          required
          {...register("phoneNumber")}
        />
        <input placeholder="Password" required {...register("password")} />
        <input
          placeholder="enter your confirm Password"
          {...register("confirmPassword")}
          required
        />
        <input placeholder="Street" required {...register("address.street")} />
        <input placeholder="City" required {...register("address.city")} />
        <input
          placeholder="District"
          required
          {...register("address.district")}
        />
        <input
          placeholder="Division"
          required
          {...register("address.division")}
        />
        <input placeholder="Postal" required {...register("address.postal")} />

        <input type="submit" />
      </form>
    </div>
  );
}
