import sidebarContent from "../data/sidebarContent";

const getEndpoint = (endpoint) => {
  return sidebarContent.find((content) => content.slug === endpoint);
};

export default getEndpoint;
