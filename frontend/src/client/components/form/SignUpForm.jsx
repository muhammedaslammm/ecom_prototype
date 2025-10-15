import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signupSchema from "../formSchema/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "@/provider/UserContext";
import { toast } from "sonner";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  // form submission
  const submitForm = async (userData) => {
    const response = await registerUser(userData);
    if (response?.existingUser) {
      setError("email", {
        type: "manual",
        message: "Email already in use",
      });
      return;
    }
    if (response) {
      toast.success("user registration successfull");
      navigate("/home");
    } else console.log(response);
  };

  return (
    <form
      action=""
      className="flex flex-col gap-6 mt-6"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="user__name w-full">
        <input
          type="text"
          className="input--form"
          placeholder="Username"
          {...register("username")}
        />
        {errors.username && (
          <p className="error--input">{errors.username?.message}</p>
        )}
      </div>
      <div className="email">
        <input
          type="email"
          placeholder="E-mail"
          className="input--form"
          {...register("email")}
        />
        {errors.email && (
          <p className="error--input">{errors.email?.message}</p>
        )}
      </div>
      <div className="passwords flex gap-4">
        <div className="password w-full">
          <input
            type="password"
            placeholder="Password"
            className="input--form"
            {...register("password")}
          />
          {errors.password && (
            <p className="error--input">{errors.password?.message}</p>
          )}
        </div>
        <div className="confirm__password w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input--form"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <p className="error--input">{errors.confirm_password?.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-start mt-6">
        <button className="px-8 py-2 text-[1.55rem] rounded-[.2rem] transition font-semibold text-white bg-[#b00015] uppercase text-center hover:bg-sky-700 active:bg-sky-600 cursor-pointer self-start">
          sign up
        </button>
        <p className="text-[1.4rem] text-gray-400 flex flex-col items-end">
          Already have an account ?{" "}
          <Link
            className="cursor-pointer text-blue-800 capitalize"
            to="/register/log-in"
          >
            log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
