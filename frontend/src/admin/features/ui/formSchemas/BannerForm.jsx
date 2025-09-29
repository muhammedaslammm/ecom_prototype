import BannerImage from "./BannerImage";
import BannerImages from "./BannerImages";
import getLayouts from "./utils/getLayouts";

const BannerForm = ({ section, handleFormInput }) => {
  let layouts = getLayouts(section.section_type);
  return (
    <div className="flex gap-8">
      <div className="space-y-4 w-2/6">
        <div className="a-text--label">Section Layout</div>
        <div className="flex gap-4">
          {layouts.map((layout) => (
            <label className="">
              <input
                type="radio"
                name={layout.name}
                value={layout.value}
                checked={layout.value === section.layout}
                onChange={handleFormInput}
              />
              <img
                src={layout?.image}
                alt={layout.alt}
                width={200}
                className="w-full object-contain"
              />
            </label>
          ))}
        </div>
      </div>
      <div className="w-4/6 flex flex-col gap-4">
        <div className="a-text--label">
          {section.layout !== "1" ? "Banner Images" : "Banner Image"}
        </div>
        {section.layout !== "1" && (
          <BannerImages handleFormInput={handleFormInput} />
        )}
        {section.layout === "1" && <BannerImage />}
      </div>
    </div>
  );
};

export default BannerForm;
