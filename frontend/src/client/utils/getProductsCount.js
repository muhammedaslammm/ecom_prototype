const getProductsCount = (products) => {
  const count = products.length;
  return { count: count, countMessage: `total products : ${count}` };
};

export default getProductsCount;
