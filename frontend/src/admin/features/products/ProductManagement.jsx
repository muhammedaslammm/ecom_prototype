// import { useState } from "react";

// const ProductManagement = () => {
//   const [productData, setProductData] = useState({
//     name: "",
//     brand: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setProductData({
//       ...productData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Product Data:", productData);
//     // TODO: Add API call or Redux action here
//   };

//   return (
//     <section className="flex gap-6 mb-8">
//       {/* Left Section - Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-[60%] bg-white border border-gray-300 rounded-lg p-6 space-y-5 shadow-sm"
//       >
//         {/* Product Name */}
//         <div>
//           <label className="text-lg font-medium block mb-1">Product Name</label>
//           <input
//             type="text"
//             name="name"
//             value={productData.name}
//             onChange={handleChange}
//             placeholder="Eg: Samsung Galaxy S21"
//             className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Brand Name */}
//         <div>
//           <label className="text-lg font-medium block mb-1">Brand Name</label>
//           <input
//             type="text"
//             name="brand"
//             value={productData.brand}
//             onChange={handleChange}
//             placeholder="Eg: Samsung"
//             className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//           />
//         </div>

//         {/* Product Description */}
//         <div>
//           <label className="text-lg  font-medium block mb-1">
//             Product Description
//           </label>
//           <textarea
//             name="description"
//             value={productData.description}
//             onChange={handleChange}
//             placeholder="Eg: A premium Android smartphone with AMOLED display..."
//             className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             rows={4}
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="text-white bg-[#176eb1] hover:bg-black !py-3 px-6 rounded transition text-[1.3rem]"
//         >
//           Submit Product
//         </button>
//       </form>

//       {/* Right Section (Placeholder) */}
//       <div className="w-[40%] bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
//         <p className="text-gray-400 text-sm">Right Section (image)</p>
//       </div>
//     </section>
//   );
// };

// export default ProductManagement;
import { useState } from "react";

const ProductManagement = () => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    description: "",
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    // 🔁 Hook this into your backend logic
  };

  return (
    <section className="flex gap-6 mb-8">
      {/* Left: Product Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[60%] a-section--box space-y-5"
      >
        {/* Product Name */}
        <div>
          <label className="a-text--label">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Eg: Samsung Galaxy S21"
            className="a-input"
          />
        </div>

        {/* Brand Name */}
        <div>
          <label className="a-text--label">Brand Name</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            placeholder="Eg: Samsung"
            className="a-input"
          />
        </div>

        {/* Description */}
        <div>
          <label className="a-text--label">Product Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Eg: A premium Android smartphone with AMOLED display..."
            rows={4}
            className="a-input"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="text-white bg-[#176eb1] hover:bg-black !py-3 px-6 rounded transition text-[1.3rem]"
        >
          Submit Product
        </button>
      </form>

      {/* Right: Placeholder */}
      <div className="w-[40%] a-section--box">
        <p className="a-text--sub">Right Section (Reserved for future use)</p>
      </div>
    </section>
  );
};

export default ProductManagement;
