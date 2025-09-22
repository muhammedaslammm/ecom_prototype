import { createPortal } from "react-dom";
import { X, ImageSquare } from "phosphor-react";
import { useRef, useState } from "react";

const ImageModal = ({ sku, func, handleImages }) => {
  let inputRef = useRef(null);
  let [images, setImages] = useState([]);

  const handleInputClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log("events:", event.target.files);
    let files = Array.from(event.target.files);
    let previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(previews);
  };

  const changeImage = (index) => {
    setImages((prevImages) => {
      let newImages = prevImages.filter((_, i) => i !== index);
      URL.revokeObjectURL(prevImages[index].url);
      return newImages;
    });
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-[.5rem] w-[70%] min-h-[60rem] max-h-[60rem]  flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="text-[1.4rem] font-medium capitalize">
            Handle Product Images {sku}
          </div>
          <X
            className="text-red-700 w-[1.5rem] h-[1.5rem] cursor-pointer"
            weight="bold"
            onClick={func}
          />
        </div>

        <input
          type="file"
          multiple
          className="hidden"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
        />
        {!images.length ? (
          <div className="flex-1 flex flex-col justify-center items-center gap-4 border-3 border-dashed border-gray-400">
            <div className="text-[1.7rem] font-medium">
              No images are added for this product variant so far.
            </div>
            <button
              className="a-text--button bg-green-800 text-white self-center"
              onClick={handleInputClick}
            >
              Add images
            </button>
          </div>
        ) : (
          <div className="grid flex-1 grid-cols-5 auto-rows-[15rem] gap-4 overflow-y-scroll border-3 border-dashed border-gray-400 p-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={image.file.name}
                  className="w-full h-full object-cover"
                />
                <X
                  className="absolute top-2 right-2 w-[1.5rem] h-[1.5rem] text-red-700 bg-white"
                  weight="bold"
                  onClick={() => changeImage(index)}
                />
              </div>
            ))}
          </div>
        )}
        <div className="self-end mt-auto  a-text--button text-white bg-red-800/90">
          <button>Submit Images</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
