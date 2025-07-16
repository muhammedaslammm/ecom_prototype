import newArrivals from "../../data/newArrival";

const NewArrivals = () => {
  return (
    <section className="new-arrivals  bg-[#e3d2c1] my-16 py-16 ">
      <div className="w-[95%] mx-auto space-y-8">
        <div>
          <h3 className="text-[2.1rem] capitalize font-medium">
            {newArrivals?.title}
          </h3>
          <p className="text-[1.7rem]">{newArrivals?.note}</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {newArrivals
            ? newArrivals.items.map((item) => (
                <div className="h-[35rem] relative cursor-pointer">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover rounded-[1rem]"
                  />
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 rounded-[1rem]"></div>
                  <div className="absolute bottom-8 left-8 text-white space-y-2">
                    <p className="text-[2rem] font-semibold leading-[3rem]">
                      {item.title}
                    </p>
                    <p className="text-[1.6rem] text-neutral-400">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
