const Trust = () => {
  return (
    <div
      className="w-[90%] mx-auto py-16 px-4 sm:px-6 md:px-10 
    lg:px-12 bg-neutral-300 text-neutral-500 grid grid-cols-1 sm:grid-cols-2 
    lg:grid-cols-4 gap-14 sm:gap-10 lg:gap-[5rem]"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-box-open text-[4.5rem]"></i>
        <div className="text-center">
          <p className="capitalize text-[2.5rem] font-semibold">
            authentic products
          </p>
          <p className="text-[1.5rem]">We guarantee you authentic products.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-rotate-left text-[4.5rem]"></i>
        <div className="text-center">
          <p className="capitalize text-[2.5rem] font-medium">easy return</p>
          <p className="text-[1.5rem]">Return the product with much ease.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-money-bill-1-wave text-[4.5rem]"></i>
        <div className="text-center">
          <p className="capitalize text-[2.5rem] font-semibold">easy payment</p>
          <p className="text-[1.5rem]">
            The payment is easy plus fast than you though
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-truck-fast text-[4.5rem]"></i>
        <div className="text-center">
          <p className="capitalize text-[2.5rem] font-medium">fast delivery</p>
          <p className="text-[1.5rem]">
            Prototype, here you can expect much more faster delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
