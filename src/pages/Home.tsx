import AvailableServiceCart from "../components/AvailableServiceCart";
import Banner from "../components/Banner";
import UpcomingServiceCart from "../components/UpcomingServiceCart";
import {
  useGetAvailableServiceQuery,
  useGetUpcomingServiceQuery,
} from "../redux/features/service/serviceApi";
import { IService } from "../types/IService";
import { motion, useScroll, useSpring } from "framer-motion";
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
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Banner />
      <div>
        <h1 className="text-center text-4xl mt-5">Top Available Service</h1>
        <div className="  grid xl:grid-cols-3 gap-y-4 items-center lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
          {availableService?.data?.map((service: IService) => (
            <AvailableServiceCart
              key={Math.floor(new Date().valueOf() * Math.random())}
              service={service}
            />
          ))}
        </div>
        <div>
          <h1 className="text-center text-4xl mt-5">Top Upcoming Service</h1>
          <div className="  grid xl:grid-cols-3 gap-y-4 items-center lg:grid-cols-2 md:grid-cols-1 extraSm:grid-cols-1">
            {upcomingService?.data?.map((service: IService) => (
              <UpcomingServiceCart
                key={Math.floor(new Date().valueOf() * Math.random())}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
