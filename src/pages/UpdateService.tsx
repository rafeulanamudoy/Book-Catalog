import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { IService } from "../types/IService";
import { useUpdateServiceMutation } from "../redux/features/service/serviceApi";
import toast from "react-hot-toast";
import Form from "../reactHookForm/Form";
import Input from "../reactHookForm/Input";

export default function UpdateService() {
  const location = useLocation();
  console.log(location);

  const { register, handleSubmit, reset } = useForm<IService>();
  const [updateService] = useUpdateServiceMutation();
  const navigate = useNavigate();
  const onSubmit = async (payload: IService) => {
    const parsePrice = parseFloat(payload.price as unknown as string);
    const serviceId = location?.state?.id;
    //console.log(serviceId);
    console.log(payload, "payload check");
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
    //console.log(updateData);
  };

  return (
    <div className="my-10 ">
      <Form
        className="   extraSm:text-xs lg:text-sm grid justify-center "
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      >
        <h1 className="text-center text-2xl text-orange-600 ">Edit Service</h1>

        <div className=" ">
          <label htmlFor="">Service Name</label>
          <div className="grid">
            <Input
              className="border text-black border-slate-400 rounded:lg p-2"
              placeholder="Service Name"
              autoFocus
              name="name"
              defaultValue={location?.state?.name}
              register={register}
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">Image Url</label>
          <div className="grid">
            <Input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="text"
              name="image"
              placeholder="Image Url"
              defaultValue={location?.state?.image}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">description</label>
          <div className="grid">
            <Input
              className="border w-full text-black border-slate-400 rounded p-2"
              placeholder="description"
              name="description"
              textarea={true}
              defaultValue={location?.state?.description}
              register={register}
              autoFocus
            />
          </div>
        </div>

        <div className="  ">
          <label htmlFor="">price</label>
          <div className="grid">
            <Input
              className="border w-full text-black border-slate-400 rounded p-2"
              type="number"
              placeholder="price"
              name="price"
              defaultValue={location?.state?.price}
              register={register}
              autoFocus
            />
          </div>
        </div>
        <div className="grid justify-center ">
          <label className="">Service Status:</label>

          <div className=" flex gap-3">
            <div>
              <Input
                type="radio"
                value="available"
                name="serviceStatus"
                register={register}
                defaultChecked={location?.state?.serviceStatus === "available"}
              />
              <label>Available</label>
            </div>
            <div className="">
              <Input
                type="radio"
                value="unavailable"
                name="serviceStatus"
                register={register}
                defaultChecked={
                  location?.state?.serviceStatus === "unavailable"
                }
              />
              <label>unavailable</label>
            </div>
            <div className="">
              <Input
                type="radio"
                value="upcoming"
                name="serviceStatus"
                register={register}
                defaultChecked={location?.state?.serviceStatus === "upcoming"}
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
      </Form>
    </div>
  );
}
