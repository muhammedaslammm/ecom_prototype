const LoginForm = () => {
  return (
    <form action="" className="flex flex-col gap-5 mt-6">
      <div className="user__name">
        <input type="text" className="input--form" placeholder="Username" />
      </div>
      <div className="email">
        <input type="email" placeholder="E-mail" className="input--form" />
      </div>
      <div className="passwords flex gap-4">
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            className="input--form"
          />
        </div>
        <div className="confirm__password">
          <input
            type="password"
            placeholder="Password"
            className="input--form"
          />
        </div>
      </div>
      <div className="flex justify-between items-start mt-4">
        <button className="px-8 py-2 text-[1.55rem] rounded-[.2rem] transition font-semibold text-white bg-sky-600 uppercase text-center hover:bg-sky-700 active:bg-sky-600 cursor-pointer self-start">
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

export default LoginForm;
