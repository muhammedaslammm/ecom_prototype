import camera_banner from "../assets/home_banners/camera_banner.jpg";

const Banner = () => {
  return (
    <div className="relative banner w-full h-[350px]">
      <img src={camera_banner} alt="" className="w-full object-cover" />
      <div className="absolute top-[50%] -translate-y-[50%] right-[30%] translate-x-[30%]">
        <p className=" text-[1.8rem] text-neutral-800">prototype</p>
        <div className=" w-[60rem] flex flex-col gap-8 mt-4 mb-8">
          <h1 className="text-[3.5rem] text-neutral-800 font-semibold leading-[4rem]">
            Experience the innovation with SONY
          </h1>
        </div>
        <div className="text-neutral-800 leading-[2rem]">
          <p className="text-[1.3rem] uppercase">may month deal</p>
          <p className="text-[1.8rem] font-medium">
            10% off for all SONY cameras
          </p>
          <p className="text-[1.3rem] mt-4">15th May - 25th May</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
