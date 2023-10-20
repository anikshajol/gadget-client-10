import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Root;
