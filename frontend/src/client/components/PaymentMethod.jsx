import getPaymentMethod from "../utils/getPaymentMethod";

const PaymentMethod = ({ method }) => {
  let paymentMethod = getPaymentMethod(method);
  return (
    <div className="bg-white border border-neutral-300 rounded-[.5rem] p-6 text-[1.7rem]">
      <h2 className="font-semibold">Payment Method</h2>
      <p className="">{paymentMethod}</p>
    </div>
  );
};

export default PaymentMethod;
