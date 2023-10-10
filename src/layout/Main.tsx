import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
