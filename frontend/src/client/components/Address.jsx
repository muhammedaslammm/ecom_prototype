const Address = ({ address }) => {
  return (
    <div className="bg-white p-6 border rounded-[.5rem] border-neutral-300 space-y-4">
      <h3 className="head text-[1.7rem] font-medium">Address</h3>
      <div className="details text-[1.7rem] leading-[2.4rem]">
        <p className="font-medium">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>
          {address.city}, {address.state}
        </p>
        <p className="text-neutral-500">phone: {address.phone}</p>
      </div>
    </div>
  );
};

export default Address;
