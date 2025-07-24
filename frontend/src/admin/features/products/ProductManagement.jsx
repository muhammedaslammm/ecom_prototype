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
import { useState, useRef } from "react";
import Cropper from "react-easy-crop";

const ProductManagement = () => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    description: "",
  });

  const [images, setImages] = useState([]);
  const [showCropModal, setShowCropModal] = useState(false);
  const [currentCropIndex, setCurrentCropIndex] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  // ✅ Ref to reset file input
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);

    // ✅ Clear input file name if no images left
    if (updated.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openCropModal = (index) => {
    setCurrentCropIndex(index);
    setShowCropModal(true);
  };

  const closeCropModal = () => {
    setShowCropModal(false);
    setCurrentCropIndex(null);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log("Crop complete:", croppedAreaPixels);
    // TODO: Add canvas logic if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    console.log("Images:", images);

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("brand", productData.brand);
    formData.append("description", productData.description);
    images.forEach((img) => {
      formData.append("images[]", img.file);
    });

    // 🔁 Submit to backend if needed
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
            placeholder="Eg: A premium Android smartphone..."
            rows={4}
            className="a-input"
          />
        </div>

        <div>
          <label className="a-text--label">Upload Product Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            ref={fileInputRef} // ✅ for clearing file input
            className="a-input"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#176eb1] hover:bg-black !py-3 px-6 rounded transition text-[1.3rem]"
        >
          Submit Product
        </button>
      </form>

      {/* Right: Image Preview */}
      <div className="w-[40%] a-section--box p-4">
        <h3 className="a-text--sub mb-2">Image Previews</h3>
        <div className="grid grid-cols-2 gap-2">
          {images.map((img, index) => (
            <div key={index} className="relative border rounded group">
              <img
                src={img.preview}
                alt={`preview-${index}`}
                className="w-full h-[150px] object-cover rounded"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
              <button
                onClick={() => openCropModal(index)}
                className="absolute bottom-1 right-1 bg-white text-black text-xs px-2 py-1 rounded hover:bg-blue-600 hover:text-white"
              >
                Crop
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Crop Modal */}
      {showCropModal && currentCropIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-[90%] max-w-lg">
            <h3 className="text-lg font-semibold mb-2">Crop Image</h3>
            <div className="relative w-full h-[300px] bg-gray-200">
              <Cropper
                image={images[currentCropIndex].preview}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={closeCropModal}
                className="bg-gray-300 text-sm px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Optional: apply canvas crop and update image
                  closeCropModal();
                }}
                className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
              >
                Save Crop
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductManagement;
