import { SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "../hooks/hook";

import { useGetUserByEmailQuery } from "../redux/features/auth/authApi";

import { IBookingService } from "../types/IBooking";

export default function ServiceBook() {
  const { email } = useAppSelector((state) => state.auth.user);

  const { addToCart } = useAppSelector((state) => state.booking);
  //console.log(addToCart[0]);

  const { data } = useGetUserByEmailQuery(email);
  //console.log(data?.data?.id);

  const { register, handleSubmit, reset } = useForm<IBookingService>();

  const onSubmit: SubmitHandler<IBookingService> = async (payload) => {
    console.log(payload);
    //console.log(bookId, updateData);

    // updateSingleBook({ bookId, payload });
    //console.log("updated data", bookData);
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
                defaultValue={addToCart[0]?.name}
                autoFocus
              />
            </div>
          </div>

          <div className="hidden  ">
            <label htmlFor=""> ServiceId:</label>
            <div className="grid">
              <input
                className="border w-full border-slate-400 rounded p-2"
                type="text"
                placeholder="serviceId"
                defaultValue={addToCart[0]?.id}
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
