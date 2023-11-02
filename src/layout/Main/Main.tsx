import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Header from "./Header";

export default function Main() {
  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-grow ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
