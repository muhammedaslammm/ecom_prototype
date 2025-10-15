import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../formSchema/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "@/provider/UserContext";
import { toast } from "sonner";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: zodResolver(loginSchema) });
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const response = await loginUser(formData);
    if (response?.wrongCredentials) {
      setError("password", {
        type: "manual",
        message: "Invalid Email or Password",
      });
      return;
    }
    if (response) navigate("/home");
    else toast.error(response.message);
  };

  return (
    <form
      action=""
      className="flex flex-col gap-8 mt-6 h-full w-full"
      onSubmit={handleSubmit(submitForm)}
      noValidate
    >
      <div className="email">
        <input
          type="email"
          placeholder="E-mail"
          className="input--form"
          {...register("email")}
        />
        {errors.email && <p className="error--input">{errors.email.message}</p>}
      </div>
      <div className="password">
        <input
          type="password"
          placeholder="Password"
          className="input--form"
          {...register("password")}
        />
        {errors.password && (
          <p className="error--input">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-between items-start mt-6">
        <button className="px-8 py-2 text-[1.55rem] rounded-[.2rem] transition font-semibold text-white bg-[#b00015] uppercase text-center hover:bg-sky-700 active:bg-sky-600 cursor-pointer self-start">
          log in
        </button>
        <p className="text-[1.4rem] text-gray-400 flex flex-col items-end">
          let's create an account ?{" "}
          <Link
            className="cursor-pointer text-blue-800 capitalize"
            to="/register/sign-up"
          >
            sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
