import { SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "../hooks/hook";

import { useGetUserByEmailQuery } from "../redux/features/auth/authApi";

import { IBookingService } from "../types/IBooking";
import { useLocation } from "react-router-dom";
import { useCreateBookingMutation } from "../redux/features/Booking/bookingApi";
import toast from "react-hot-toast";

export default function ServiceBook() {
  const { email } = useAppSelector((state) => state.auth.user);

  const location = useLocation();
  //console.log(location.state);

  //console.log(addToCart[0]);

  const { data } = useGetUserByEmailQuery(email);
  //console.log(data?.data?.id);

  const { register, handleSubmit, reset } = useForm<IBookingService>();
  const [postBook] = useCreateBookingMutation();

  const onSubmit: SubmitHandler<IBookingService> = async (payload) => {
    const publicationDateISO = new Date(payload.startDate).toISOString();
    console.log(payload);

    const updatedData = {
      userId: payload.userId,
      serviceId: payload.serviceId,
      colorScheme: payload.colorScheme || "",
      userRequerment: payload.userRequerment || "",
      timeSlot: payload.timeSlot,
      startDate: publicationDateISO,
      dimention: payload.dimention,
      location: payload.location,
    };
    await postBook(updatedData)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
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
    <div className="bookPageGradient ">
      <div className=" ">
        <form
          className=" h-screen  extraSm:text-xs lg:text-sm grid justify-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-2xl text-orange-600 ">
            Book Your Service
          </h1>

          <div className=" ">
            <label htmlFor="">
              <span className=" text-red-500">1.</span>You Service Name
            </label>
            <div className="grid">
              <input
                className="border border-slate-400 rounded:lg p-2"
                defaultValue={location?.state?.name}
                autoFocus
              />
            </div>
          </div>

          <div className=" hidden ">
            <label htmlFor=""> ServiceId:</label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type="text"
                placeholder="serviceId"
                defaultValue={location?.state?.id}
                {...register("serviceId")}
                autoFocus
              />
            </div>
          </div>
          <div className="hidden ">
            <label htmlFor="">User Id:</label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type="text"
                placeholder="userId"
                defaultValue={data?.data?.id}
                {...register("userId")}
                autoFocus
              />
            </div>
          </div>
          <div className="  ">
            <label htmlFor="">
              <span className=" text-red-500">2.</span>
              You May Name A Color Scheme{" "}
              <span className="text-orange-600 text-xs">Optional*</span>
            </label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type="text"
                placeholder="colorScheme"
                {...register("colorScheme")}
                autoFocus
              />
            </div>
          </div>
          <div className="  ">
            <label htmlFor="">
              <span className=" text-red-500">3.</span>
              Please Provide The dimention Of the Area To Paint
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="border  border-slate-400 rounded p-2"
                type="text"
                placeholder="Height"
                {...register("dimention.height")}
                autoFocus
                required
              />
              <input
                className="border border-slate-400 rounded p-2"
                type="text"
                placeholder="Width"
                {...register("dimention.width")}
                autoFocus
                required
              />
            </div>
          </div>
          <div className="  ">
            <label htmlFor="">
              <span className=" text-red-500">4.</span>
              Please describe your design preferences and any specific
              requirements or ideas you have in mind.
              <span className="text-orange-600 text-xs">Optional*</span>
            </label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type=""
                placeholder="DesCription"
                {...register("userRequerment")}
                autoFocus
              />
            </div>
          </div>
          <div className="  ">
            <label htmlFor="">
              {" "}
              <span className=" text-red-500">5.</span> When You Like to Start
              Your Service
            </label>
            <div className="grid">
              <input
                className=" w-full border border-slate-400 rounded p-2"
                type="date"
                placeholder="Start Time"
                required
                {...register("startDate")}
                autoFocus
              />
            </div>
          </div>
          <div className="  ">
            <label htmlFor="">
              {" "}
              <span className=" text-red-500">6.</span>Chose Your Prerabrable
              Time Slot
            </label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type="time"
                placeholder="Time Slot"
                required
                {...register("timeSlot")}
                autoFocus
              />
            </div>
          </div>
          <div className="  ">
            <label htmlFor="">
              {" "}
              <span className=" text-red-500">7.</span>Please Provive Your
              Address
            </label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type="string"
                placeholder="Your Locaton"
                required
                {...register("location")}
                autoFocus
              />
            </div>
          </div>

          <input className="submit-button " type="submit" value="Book" />
        </form>
      </div>
    </div>
  );
}
