import { useEffect, useState } from "react";
import getSectionData from "./formSchemas/utils/getSectionData";

const useHomeUI = () => {
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState(getSectionData("banner"));

  useEffect(() => {
    console.log("section data:", section);
  }, [section]);

  // handle section type
  const handleSectionType = (event) => {
    setSection(getSectionData(event.target.value));
  };

  // handle form input
  const handleFormInput = (event) => {
    let { name, value, files } = event.target;
    setSection((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const createSection = () => {};

  return {
    sections,
    section,
    handleSectionType,
    handleFormInput,
    createSection,
  };
};

export default useHomeUI;
