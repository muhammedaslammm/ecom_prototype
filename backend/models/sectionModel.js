import mongoose from "mongoose";

let Section = mongoose.model(
  "section",
  new Schema(
    {
      section_type: { type: String, required: true },
    },
    { discriminatorKey: "section_type", collection: "sections" }
  )
);

let Banner = Section.discriminator(
  "banner",
  new Schema({
    layout: String,
    backgroundImage: String,
    backgroundImages: [String],
    ctaLink: String,
  })
);

let Listing = Section.discriminator(
  "listing",
  mongoose.Schema({
    section_title: String,
    backgroundImage: String,
    backgroundColor: String,
    dataDisplay: String,
    dataLimit: Number,
    ctaLink: String,
  })
);

export { Section, Banner, Listing };
