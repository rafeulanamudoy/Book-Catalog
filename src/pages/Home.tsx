import ServiceCart from "../components/ServiceCart";
import Banner from "../components/Banner";

import {
  useGetAvailableServiceQuery,
  useGetUpcomingServiceQuery,
} from "../redux/features/service/serviceApi";
import { IService } from "../types/IService";
import {
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useSpring,
} from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();

  const { data: availableService } = useGetAvailableServiceQuery(undefined);
  const { data: upcomingService } = useGetUpcomingServiceQuery(undefined);
  console.log(upcomingService);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        <m.div className="progress-bar" style={{ scaleX }} />

        <Banner />
        <div className="  ">
          <h1 className="text-center text-4xl py-10">Top Available Service</h1>
          <div className="  w-3/4 mx-auto grid xl:grid-cols-3  gap-10  lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
            {availableService?.data?.map((service: IService) => (
              <ServiceCart
                key={Math.floor(new Date().valueOf() * Math.random())}
                service={service}
              />
            ))}
          </div>
          <div>
            <h1 className="text-center text-4xl py-10">Top Upcoming Service</h1>
            <div className="   bottom-0 w-3/4 mx-auto grid xl:grid-cols-3  gap-10  lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1 mb-10">
              {upcomingService?.data?.map((service: IService) => (
                <ServiceCart
                  key={Math.floor(new Date().valueOf() * Math.random())}
                  service={service}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
