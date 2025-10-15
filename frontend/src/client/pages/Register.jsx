import { Link, Outlet } from "react-router-dom";
import RegisterHeader from "../components/RegisterHeader";
import { Toaster } from "sonner";

const Register = () => {
  return (
    <div className="bg-neutral-200 h-screen overflow-hidden">
      <Toaster position="top-center" />

      <div className="h-full">
        <div className="bg-black">
          <Link className="text-white" to="/home">
            <div className="w-[95%] mx-auto py-4">{`< Back to home page`}</div>
          </Link>
        </div>
        <div className="flex h-full">
          <div className="w-4/6 h-full">
            <img
              src="https://cityfurnish.com/blog/wp-content/uploads/2023/05/21253197_2106.q703.016.S.m004.c10.household-appliance-realistic-min-scaled.jpg"
              alt="lock screen banner image"
              className="h-full object-cover object-left"
            />
          </div>

          <div className="w-2/6 py-[8rem] px-16">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
