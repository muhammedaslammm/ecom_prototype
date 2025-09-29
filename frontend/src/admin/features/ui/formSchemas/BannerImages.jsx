import { useRef, useState } from "react";

const BannerImages = ({ handleFormInput }) => {
  let inputRef = useRef(null);
  let [previews, setPreviews] = useState([]);
  let [selectedPreview, setSelectedPreview] = useState(null);

  const triggerInput = () => {
    inputRef.current.click();
  };
  const fileChange = (e) => {
    let files = e.target.files;
    let image_previews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews((previews) => [...previews, ...image_previews]);
    setSelectedPreview(image_previews[0]);
    handleFormInput(e);
  };
  return (
    <div className="flex flex-col gap-4 h-full">
      <input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        ref={inputRef}
        name="backgroundImages"
        onChange={fileChange}
      />
      <div className="flex h-[20rem] justify-center items-center border-3 border-dashed border-neutral-300 rounded-[.5rem] bg-neutral-200">
        {selectedPreview ? (
          <img
            src={selectedPreview}
            alt="preview image"
            className="w-full h-full object-cover"
          />
        ) : (
          <button
            className="a-text--button text-white bg-green-800"
            onClick={triggerInput}
          >
            Add banner images for this section
          </button>
        )}
      </div>
      {selectedPreview && (
        <div className="space-y-2">
          <div className="a-text--label capitalize">Selected Banner Images</div>
          <div className="flex flex-wrap items-center gap-2 bg-neutral-200 p-2">
            {previews.map((preview, index) => (
              <div className="relative">
                <img
                  src={preview}
                  alt="banner images"
                  className="w-[8rem] h-[8rem] object-cover hover:translate-x-[.2rem] transition-transform cursor-pointer"
                  onClick={() => setSelectedPreview(preview)}
                />
                {preview === selectedPreview && (
                  <div className="absolute inset-0 bg-black/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerImages;
