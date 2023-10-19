import { ServiceCartProps } from "../types/IService";

export default function UpcomingServiceCart({ service }: ServiceCartProps) {
  console.log(service);
  const { name, image, price, serviceStatus } = service;
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
        <h1>Service Status:{serviceStatus}</h1>

        <button className="  bg-red-900 w-32 rounded-full text-xs  leading-8 my-5">
          Details
        </button>
      </div>
    </div>
  );
}
