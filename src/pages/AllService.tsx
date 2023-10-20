import AllServiceCart from "../components/AllServiceCart";
import { IService } from "../types/IService";
import SearchBar from "../components/SearchBar";
import ProductFilterModal from "../components/ProductFilterModel";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import {} from "../redux/features/service/serviceApi";
import { useFilterQuery } from "../hooks/useFilterQuery";

export default function AllService() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useFilterQuery();
  //console.log(data, "useQuery");

  const handleShowFilter = () => {
    // console.log("clicked");
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-black h-screen">
      <ProductFilterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <h1 className="text-center text-4xl  text-white">Our Services</h1>

      <div className="  w-4/5 grid  gap-4   justify-center items-center mx-auto    grid-cols-9">
        <button
          onClick={() => handleShowFilter()}
          className=" xl:col-span-1 extraSm:col-span-2 leading-8  rounded-lg  2xl:text-sm  xl:text-xs  md:text-[12px] extraSm:text-[8px] text-black bg-white "
        >
          <FontAwesomeIcon className="" icon={faFilter} /> show filter
        </button>
        <SearchBar />
      </div>
      <div className="  grid xl:grid-cols-3 gap-y-4 items-center lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
        {data?.map((service: IService) => (
          <AllServiceCart
            key={Math.floor(new Date().valueOf() * Math.random())}
            service={service}
          />
        ))}
      </div>
    </div>
  );
}
