import { Outlet } from "react-router-dom";
import RegisterHeader from "../components/RegisterHeader";
import { Toaster } from "sonner";

const Register = () => {
  return (
    <div className="register">
      <Toaster position="top-center" />
      <RegisterHeader />
      <div className="body flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Register;
