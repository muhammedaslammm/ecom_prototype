import { Switch } from "@/components/ui/switch";
import useHomeUI from "./useHomeUI";
import NewSection from "./NewSection";

const AdminUI = () => {
  let { section, handleSectionType, handleFormInput, createSection } =
    useHomeUI();
  let section_config = {
    section,
    handleSectionType,
    handleFormInput,
    createSection,
  };
  return (
    <div className="a-section--container">
      {/* announcement-sections */}
      <div className="announcement_bar a-section--box">
        {/* top */}
        <div className="flex items-center gap-4">
          <div className="w-5/6 space-y-1">
            <div className="a-section--title">Announcement</div>
            <input
              type="text"
              className="a-input"
              placeholder="Eg: 20% discout on all kitchen appliances"
            />
          </div>
          <div className="w-1/6 space-y-1">
            <div className="a-section--title">Path</div>
            <input type="text" className="a-input" />
          </div>
        </div>
        {/* bottom */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <div className="a-section--title">Background Color</div>
              <input type="text" className="a-input" />
            </div>
            <div>
              <div className="a-section--title">Text Color</div>
              <input type="text" className="a-input" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>show/hide</div>
            <Switch className={"border border-neutral-700"} />
          </div>
        </div>
      </div>

      {/* section instruction */}
      <div className="a-section--box">
        <div>
          Keep adding the <strong>Home Page</strong> sections below. Each
          section will stack one after the other based on the order of
          insertion.
        </div>
      </div>

      {/* new banner section */}
      <NewSection config={section_config} />
    </div>
  );
};

export default AdminUI;
