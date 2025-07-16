const Header = () => {
  return (
    <header className="sticky top-0 bg-neutral-900 ">
      <nav className="w-[90%] mx-auto">
        <div
          className="logo text-white text-[1.5rem] sm:text-[1.7rem] py-[.8rem] sm:py-[1rem] uppercase"
          style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
        >
          prototype
        </div>
      </nav>
    </header>
  );
};

export default Header;
