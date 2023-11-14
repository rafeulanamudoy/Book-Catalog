import toast from "react-hot-toast";
import { useDeleteServiceMutation } from "../redux/features/service/serviceApi";
import { ServiceCartProps } from "../types/IService";

import { Link } from "react-router-dom";

export default function ManageServiceCart({ service }: ServiceCartProps) {
  const { name, image, serviceStatus, price, category, id } = service;
  console.log(service);

  // Assuming you have a conversion function for ServiceStatus to string
  const serviceStatusString = serviceStatus.toString();
  const [deleteService] = useDeleteServiceMutation();
  const handleDelete = async () => {
    const confirm = window.confirm("are your sure you want to delete");
    if (id && confirm) {
      await deleteService(id)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          //console.log(payload);

          // console.log(payload);
        })
        .catch((error) => {
          //    console.log(error, "catch");

          toast.error(error?.data?.message);
        });
    }
  };
  return (
    <div className="my-5 text-center ml-4 mr-4 text-white">
      <div>
        <div className="grid">
          <img className="object-cover h-96 w-full" src={image} alt="" />
        </div>
      </div>

      <div className="my-auto extraSm:text-sm">
        <h1>Service Name: {name}</h1>
        <h1>Price: {price}</h1>
        <h1>Category:{category?.title}</h1>
        <h1>Service Status: {serviceStatusString}</h1>
        <div className="flex gap-2 justify-center my-5 text-xs leading-8">
          <Link
            to="/dashboard/updateService"
            state={service}
            className="bg-yellow-500 w-32 rounded-full"
          >
            Update
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 w-32 rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
