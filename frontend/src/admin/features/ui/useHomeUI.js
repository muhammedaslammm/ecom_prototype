import { useEffect, useState } from "react";
import getSectionData from "./formSchemas/utils/getSectionData";

const useHomeUI = () => {
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState(getSectionData("banner")); //this is an object
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // handle section type
  const handleSectionType = (event) => {
    setSection(getSectionData(event.target.value));
  };

  // handle form input
  const handleFormInput = (event) => {
    let { name, value, files } = event.target;
    console.log("field name:", name);
    setSection((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  // submit the section
  const createSection = async () => {
    let formData = new FormData();
    for (let field in section) {
      if (field === "backgroundImages") {
        let image_array = Array.from(section[field]);
        image_array.forEach((value) =>
          formData.append(`backgroundImages`, value)
        );
        continue;
      }
      formData.append(field, section[field]);
    }
    try {
      let response = await fetch(`${BACKEND_URL}/api/sections`, {
        method: "POST",
        body: formData,
      });
      let response_data = await response.json();
      if (!response.ok) throw new Error(response_data.message);
      else {
        console.log("backend response: ", response_data.message);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return {
    sections,
    section,
    handleSectionType,
    handleFormInput,
    createSection,
  };
};

export default useHomeUI;
