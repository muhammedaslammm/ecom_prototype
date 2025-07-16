import banners from "../../data/banners";

const getBanner = (slug) => {
  return banners.find((banner) => banner.name === slug);
};

export default getBanner;
