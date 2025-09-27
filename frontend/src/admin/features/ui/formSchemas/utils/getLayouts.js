const layouts = {
  banner: [
    {
      name: "layout",
      value: "1",
      alt: "layout 1",
      image: "/admin/section/layout/banner-layout_1.jpg",
    },
    {
      name: "layout",
      value: "2",
      alt: "layout 2",
      image: "/admin/section/layout/banner-layout_2.jpg",
    },
  ],
};

const getLayouts = (layout) => {
  return layouts[layout];
};

export default getLayouts;
