import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import { ServiceCartProps } from "../types/IService";

export default function AllServiceCart({ service }: ServiceCartProps) {
  //console.log(service);
  const { name, image, serviceStatus, price, category, id } = service;
  console.log(service);

  const { email } = useAppSelector((state) => state.auth.user);

  // Assuming you have a conversion function for ServiceStatus to string
  const serviceStatusString = serviceStatus.toString();

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
          {email && serviceStatusString === "available" ? (
            <Link
              to="/book"
              state={service}
              className="bg-fuchsia-800 w-32 rounded-full"
            >
              Book
            </Link>
          ) : null}
          <Link
            to={`/serviceDetails/${id}`}
            className="bg-orange-400 w-32 rounded-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
