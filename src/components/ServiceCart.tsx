import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import { ServiceCartProps } from "../types/IService";
import { LazyMotion, m, domAnimation } from "framer-motion";

export default function ServiceCart({ service }: ServiceCartProps) {
  console.log(service);
  const location = useLocation();

  const { name, image, price, serviceStatus, id } = service;

  const { email } = useAppSelector((state) => state.auth.user);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.5 }}
        className={`book-cart  my-10 text-center  ${
          location?.pathname === "/services" ? " bg-white " : ""
        }  `}
      >
        <div>
          <div className=" grid ">
            <img className="object-cover h-96 w-full" src={image} alt="" />
          </div>
        </div>

        <div className=" my-auto extraSm:text-sm   md:text-lg xl:text-xl">
          <h1>Service Name:{name}</h1>
          <h1>Price:{price}</h1>
          <h1>Status:{serviceStatus}</h1>
          <div className="flex gap-2 justify-center my-5 leading-8  text-xs   ">
            {email && (
              <Link
                to="/book"
                state={service}
                className="  bg-yellow-500   detailsButton"
              >
                Book
              </Link>
            )}

            <Link to={`/serviceDetails/${id}`} className="detailsButton">
              Details
            </Link>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
