import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { IService } from "../types/IService";
import { useUpdateServiceMutation } from "../redux/features/service/serviceApi";
import toast from "react-hot-toast";

export default function UpdateService() {
  const location = useLocation();
  console.log(location);

  const { register, handleSubmit, reset } = useForm<IService>();
  const [updateService] = useUpdateServiceMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IService> = async (payload) => {
    const parsePrice = parseFloat(payload.price as unknown as string);
    const serviceId = location?.state?.id;
    console.log(serviceId);
    console.log(payload);
    const updateData = {
      name: payload.name,
      image: payload.image,
      description: payload.description,
      price: parsePrice,
      serviceStatus: payload.serviceStatus
        ? payload.serviceStatus
        : location.state.serviceStatus,
    };
    updateService({ serviceId, updateData })
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/dashboard/allService");

        reset();
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
    console.log(updateData);
  };

  return (
    <div className="my-10 ">
      <form
        className="   extraSm:text-xs lg:text-sm grid justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Edit Service</h1>

        <div className=" ">
          <label htmlFor="">Service Name</label>
          <div className="grid">
            <input
              className="border text-black border-slate-400 rounded:lg p-2"
              placeholder="Service Name"
              autoFocus
              defaultValue={location?.state?.name}
              {...register("name")}
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Image Url</label>
          <div className="grid">
            <input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="text"
              placeholder="Image Url"
              defaultValue={location?.state?.image}
              {...register("image")}
              autoFocus
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">description</label>
          <div className="grid">
            <textarea
              className="border w-full text-black border-slate-400 rounded p-2"
              placeholder="description"
              defaultValue={location?.state?.description}
              {...register("description")}
              autoFocus
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">price</label>
          <div className="grid">
            <input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="number"
              placeholder="price"
              defaultValue={location?.state?.price}
              {...register("price")}
              autoFocus
            />
          </div>
        </div>
        <div className="grid justify-center ">
          <label className="">Service Status:</label>

          <div className=" flex gap-3">
            <div>
              <input
                type="radio"
                value="available"
                {...register("serviceStatus")}
              />
              <label>Available</label>
            </div>
            <div className="">
              <input
                type="radio"
                value="unavailable"
                {...register("serviceStatus")}
              />
              <label>unavailable</label>
            </div>
            <div className="">
              <input
                type="radio"
                value="upcoming"
                {...register("serviceStatus")}
              />
              <label>Upcoming</label>
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
