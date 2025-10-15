import { Link } from "react-router-dom";

const RegisterHeader = () => {
  return (
    <header className="border-b border-neutral-300 fixed top-0 left-0 right-0">
      <div className="w-full py-6 bg-[#b00015]"></div>
      <nav className="bg-black">
        <div className="w-[95%] mx-auto text-white py-2">
          <Link
            to="/home"
            className="uppercase text-[1.6rem] font-medium"
            style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
          >
            {`< Back to Home Page`}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default RegisterHeader;
