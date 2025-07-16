const getPaymentMethod = (method) => {
  if (method === "cod") return "Cash on Delivery";
  if (method === "bank") return "Bank Transfer";
  if (method === "online") return "Online Payment";
  return method;
};

export default getPaymentMethod;
