// import ProductCard from "./ProductCard";

// const Deal = ({ products, title }) => {
//   return products.length ? (
//     <div className="deal w-[90%] flex flex-col gap-[1rem] mx-auto my-[3rem]">
//       <div className="head text-[2rem] capitalize font-medium">{title}</div>
//       <div className="projectors grid grid-cols-6 gap-[1rem]">
//         {products.map((deal, index) => (
//           <ProductCard key={index} product={deal} />
//         ))}
//       </div>
//     </div>
//   ) : (
//     <></>
//   );
// };
// export default Deal;

import ProductCard from "./ProductCard";

const Deal = ({ products, title }) => {
  return products.length ? (
    <div className="w-[90%] mx-auto my-12 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.map((deal, index) => (
          <ProductCard key={index} product={deal} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Deal;
