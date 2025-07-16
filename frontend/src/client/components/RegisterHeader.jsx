import { Link } from "react-router-dom";

const RegisterHeader = () => {
  return (
    <header className="border-b border-neutral-300">
      <nav className="header">
        <Link
          to="/home"
          className="logo--header "
          style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
        >
          prototype
        </Link>
      </nav>
    </header>
  );
};

export default RegisterHeader;
