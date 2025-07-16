const categories = [
  { name: "Home", slug: "home" },
  { name: "Appliances", slug: "appliances" },
  {
    name: "Electronics",
    slug: "electronics",
    sub_categories: [
      {
        name: "Display & Media",
        slug: "display-media",
        sub_categories: [
          {
            name: "Projectors",
            slug: "projector",
            sub_categories: [
              { name: "LCD", slug: "lcd" },
              { name: "DLP", slug: "dlp" },
              { name: "LED", slug: "led" },
              { name: "Laser", slug: "laser" },
              { name: "OutDoor", slug: "outdoor" },
            ],
          },
          {
            name: "Monitors",
            slug: "monitor",
          },
          {
            name: "Laptops",
            slug: "laptop",
            sub_categories: [
              { name: "Every Day", slug: "every-day" },
              { name: "Ultrabook", slug: "ultra-book" },
              { name: "Gaming", slug: "gaming" },
              { name: "Work Station", slug: "work-station" },
              { name: "Chrome Book", slug: "chrome-book" },
              { name: "Budget", slug: "budget" },
            ],
          },
        ],
      },
    ],
  },
  { name: "Mobiles", slug: "mobiles" },
  { name: "Home & Kitchen", slug: "home-kitchen" },
  { name: "Sports & More", slug: "sports-more" },
];
export default categories;
