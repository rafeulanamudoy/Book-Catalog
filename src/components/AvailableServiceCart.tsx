import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import { ServiceCartProps } from "../types/IService";

export default function AvailableServiceCart({ service }: ServiceCartProps) {
  console.log(service);
  const { name, image, price, serviceStatus } = service;

  const { email } = useAppSelector((state) => state.auth.user);

  return (
    <div className=" my-5 book-cart  text-center ml-4 mr-4 text-white">
      <div>
        <div className=" grid ">
          <img className="object-cover h-96 w-full" src={image} alt="" />
        </div>
      </div>

      <div className=" my-auto extraSm:text-sm  ">
        <h1>Service Name:{name}</h1>
        <h1>Price:{price}</h1>
        <h1>serviceStatus:{serviceStatus}</h1>
        <div className="flex gap-2 justify-center my-5  text-xs  leading-8 ">
          {email && (
            <Link
              to="/book"
              state={service}
              className="  bg-fuchsia-800   w-32 rounded-full"
            >
              Book
            </Link>
          )}

          <button className=" bg-orange-400 w-32 rounded-full">Details</button>
        </div>
      </div>
    </div>
  );
}
