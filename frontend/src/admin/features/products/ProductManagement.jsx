const ProductManagement = () => {
  return (
    <section className="flex gap-6 mb-8">
      <div className="w-[60%] a-section--box flex flex-col gap-2">
        <div className="space-y-2">
          <label className="a-section--title block">Product Title</label>
          <input
            type="text"
            name="name"
            placeholder="Eg: Samsung Galaxy S21"
            className="a-input"
          />
        </div>

        <div className="flex gap-2">
          <div className="w-full">
            <div className="a-section--title ">Brand Name</div>
            <input
              type="text"
              name="brand"
              placeholder="Eg: Samsung"
              className="a-input"
            />
          </div>
          <div className="w-full">
            <div className="a-section--title">Category</div>
            <input type="text" className="a-input" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="a-section--title block">Description</label>
          <textarea
            name="description"
            placeholder="Eg: A premium Android smartphone with AMOLED display..."
            rows={10}
            className="a-input"
          />
        </div>
      </div>

      {/* Right: Placeholder */}
      <div className="w-[40%] a-section--box">
        <div>
          <div></div>
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
