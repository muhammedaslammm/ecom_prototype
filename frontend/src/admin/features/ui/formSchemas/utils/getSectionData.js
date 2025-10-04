const section_schema = {
  banner: {
    section_type: "banner",
    layout: "1",
    backgroundImages: [""],
    backgroundImage: "",
  },
  listing: { section_type: "listing", layout: "2" },
};

const getSectionData = (section_type) => {
  return section_schema[section_type];
};

export default getSectionData;
