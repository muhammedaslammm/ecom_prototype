const EmptyPage = ({ title }) => {
  return (
    <div className="bg-white rounded-[.5rem]">
      <div className="py-[10rem] text-center">
        <div className="leading-[3.5rem]">
          <h2 className="text-[3.3rem] font-semibold">Your {title} is empty</h2>
          <p className="text-[1.8rem] text-neutral-700">
            Looks like you haven't added anything yet here.
          </p>
        </div>
        <button
          onClick={() => navigate("/home")}
          className="button--cart bg-cyan-800 text-white font-medium mt-8 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default EmptyPage;
