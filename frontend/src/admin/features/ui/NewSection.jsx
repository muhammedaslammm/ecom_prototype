import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BannerForm from "./formSchemas/BannerForm";

const NewSection = ({ config }) => {
  let { section, handleSectionType, handleFormInput } = config;
  return (
    <Accordion type="single" collapsible className="a-section--box !py-[.2rem]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="a-text--section">
          Add new home section
        </AccordionTrigger>
        <AccordionContent className=" flex flex-col gap-[2.5rem] border p-4 rounded-[.5rem] mb-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <div className="a-text--label">Section type</div>
              <select
                name="section_type"
                id="section_type"
                className="w-full a-input"
                onChange={handleSectionType}
              >
                {["banner", "listing", "poster"].map((section_type) => (
                  <option
                    value={section_type}
                    className="capitalize"
                    selected={section_type === section.section_type}
                  >
                    {section_type.split("_").join(" ")}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {section?.section_type === "banner" ? (
            <BannerForm section={section} handleFormInput={handleFormInput} />
          ) : (
            <></>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NewSection;
