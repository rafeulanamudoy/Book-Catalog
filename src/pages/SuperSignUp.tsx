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
  firstName: yup
    .string()

    .required("firsName is required"),
  lastName: yup
    .string()

    .required("LastName  is required"),
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
  contactNumber: yup
    .string()

    .required("contactNumber is required"),

  gender: yup
    .string()

    .required("gender is required"),
  superRoleKey: yup
    .string()

    .required("superRoleKey is required"),
  address: yup
    .string()

    .required("address is required"),
  designation: yup
    .string()

    .required("designation is required"),
});

export default function SuperSignUp() {
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

    console.log(others);
    const signUpData = {
      firstName: others.firstName,
      lastName: others.lastName,
      password: others.password,
      email: others.email,
      role: "superAdmin",
      gender: others.gender,
      contactNumber: others.contactNumber,
      address: others.address,
      superRoleKey: others.superRoleKey,
      designation: others.designation || "",
    };

    await postUserData(signUpData)
      .unwrap()
      .then((payload) => {
        console.log(payload);
        toast.success(payload?.message);
        dispatch(setUser(payload?.data));
        console.log(payload);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
  };

  return (
    <div className="  mt-5 flex items-center justify-center ">
      <Form
        className="box-shadow-form   lg:w-[45rem] extraSm:w-[25rem]  grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl text-orange-600 ">
          Super Admin Account
        </h1>
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            FirstName:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="firstName"
              type="text"
              placeholder="Enter your First Name"
              error={errors.firstName?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Last Name:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="lastName"
              type="text"
              placeholder="Enter your Last Name"
              error={errors.lastName?.message}
              register={register}
              autoFocus
            />
          </div>
        </div>
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Email:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
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
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Super Secret Key:
          </label>
          <div className=" ">
            <Input
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="superRoleKey"
              type="text"
              placeholder="Enter your The Super Secret Key"
              error={errors.superRoleKey?.message}
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
              className="border  lg:w-96 extraSm:w-60  border-slate-400 rounded p-2 "
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
              className="border lg:w-96 extraSm:w-60   border-slate-400 rounded p-2"
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
              autoFocus
            />
          </div>
        </div>
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Your Designation:
          </label>
          <div className="">
            <Input
              className="border lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="design"
              type="text"
              placeholder="desigantion"
              register={register}
              error={errors.designation?.message}
              autoFocus
            />
          </div>
        </div>
        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            contactNumber:
          </label>
          <div className="">
            <Input
              className="border lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="contactNumber"
              type="text"
              placeholder="contactNumber"
              register={register}
              error={errors.contactNumber?.message}
              autoFocus
            />
          </div>
        </div>

        <div className="  grid justify-center ">
          <label className="lg:w-96  grid  mx-auto" htmlFor="">
            Address:
          </label>
          <div className="">
            <Input
              className="border lg:w-96 extraSm:w-60  border-slate-400 rounded p-2"
              name="address"
              type="text"
              placeholder="Address"
              register={register}
              error={errors.gender?.message}
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
              <Input
                type="radio"
                name="gender"
                value="male"
                register={register}
                id="maleRadio"
              />
              <label>male</label>
            </div>
            <div className="">
              <Input
                type="radio"
                name="gender"
                value="female"
                register={register}
                id="femaleRadio"
              />
              <label>female</label>
            </div>
          </div>
        </div>
        <input className="submit-button" type="submit" value="Create" />
      </Form>
    </div>
  );
}
