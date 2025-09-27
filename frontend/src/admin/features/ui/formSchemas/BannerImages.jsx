import { useRef } from "react";

const BannerImages = () => {
  let inputRef = useRef(null);
  let [previews, setPreviews] = useState([]);

  const triggerInput = () => {
    inputRef.current.click();
  };
  const fileChange = (e) => {
    let files = e.target.files;
    setPreviews(() => {
        Array.from(files)
    })
  };
  return (
    <div className="flex-1">
      <input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        ref={inputRef}
        onChange={fileChange}
      />
      <div className="h-full flex justify-center items-center border-3 border-dashed border-neutral-300 rounded-[.5rem] bg-neutral-200">
        <button
          className="a-text--button text-white bg-green-800"
          onClick={triggerInput}
        >
          Add banner images for this section
        </button>
      </div>
    </div>
  );
};

export default BannerImages;
