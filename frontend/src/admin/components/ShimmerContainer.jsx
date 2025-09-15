const ShimmerContainer = () => {
  return (
    <div className="w-full min-h-[60svh] bg-neutral-300 relative rounded-[1rem] overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent a-shimmer-animation"></div>
    </div>
  );
};

export default ShimmerContainer;
