import { useGetAllServiceQuery } from "../redux/features/service/serviceApi";
import { IService } from "../types/IService";

import ManageServiceCart from "../components/ManageServiceCart";

export default function ManageService() {
  const { data } = useGetAllServiceQuery(undefined);
  return (
    <div className="bg-black">
      <h1 className="text-center text-4xl  text-white">Our Services</h1>
      <div className="grid grid-cols-2">
        {data?.data.map((service: IService) => (
          <ManageServiceCart
            key={Math.floor(new Date().valueOf() * Math.random())}
            service={service}
          />
        ))}
      </div>
    </div>
  );
}
