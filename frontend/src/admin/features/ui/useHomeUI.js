import { useState } from "react";
import getSectionData from "./formSchemas/utils/getSectionData";

const useHomeUI = () => {
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState(getSectionData("banner"));

  // handle section type
  const handleSectionType = (event) => {
    setSection(getSectionData(event.target.value))
  };

  // handle form input
  const handleFormInput = (event) => {
    let { name, value } = event.target;
    setSection((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { sections, section, handleSectionType, handleFormInput };
};

export default useHomeUI;
