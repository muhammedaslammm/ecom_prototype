import { createPortal } from "react-dom";
import { X, ImageSquare } from "phosphor-react";
import { useRef, useState } from "react";

const ImageModal = ({ func }) => {
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
      <div className="bg-white p-6 rounded-[.5rem] w-[70%] min-h-[60rem] flex flex-col gap-6">
        <div className="flex justify-between items-start h-full">
          <div className="text-[1.4rem] font-medium capitalize">
            Handle Product Images
          </div>
          <X
            className="text-red-700 w-[1.5rem] h-[1.5rem] cursor-pointer"
            weight="bold"
            onClick={func}
          />
        </div>
        <div>
          <input
            type="file"
            multiple
            className="hidden"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
          />
          <div className="grid grid-cols-5 gap-4">
            {!images.length ? (
              <div
                className="border-3 border-dashed border-gray-400 cursor-pointer"
                onClick={handleInputClick}
              >
                <ImageSquare
                  className="w-full h-full text-gray-400"
                  weight="light"
                />
              </div>
            ) : (
              images.map((image, index) => (
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
              ))
            )}
          </div>
        </div>
        <div className="self-end mt-auto a-text--button text-white bg-red-800/90">
          <button>Submit Images</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
