const DayDeal = ({ daydeal }) => {
  return (
    <section
      className="my-16 rounded-[2rem]"
      style={{ backgroundColor: `${daydeal.bg_color}` }}
    >
      <div className="relative">
        <img
          src={daydeal.image}
          alt=""
          className="w-full h-[25rem] object-cover rounded-[2rem] "
        />
        <div className="absolute top-0 left-12 flex gap-12 uppercase text-[1.6rem] pt-4 pb-2 px-6 bg-white/70">
          <p>sujorta</p>
          <p>bennim</p>
          <p>jamira</p>
        </div>
        <div className="absolute bottom-12 left-12 leading-[3.5rem]">
          <p className="text-[3.5rem] font-semibold capitalize text-black">
            {daydeal.title}
          </p>
          <p className="text-[2rem] text-black">{daydeal.offer}</p>
        </div>
      </div>
      <div
        className="grid grid-cols-6 gap-8 p-8"
        style={{ backgroundColor: `${daydeal.bg_color}` }}
      >
        {daydeal.deals.map((deal, index) => (
          <div key={index} className="space-y-2 cursor-pointer">
            <div className="image h-[17rem] bg-white rounded-[1rem]">
              <img
                src={deal.image}
                alt="image"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-[1.5rem]">{deal.title}</p>
              <p className="text-[1.7rem] font-medium">{deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DayDeal;
