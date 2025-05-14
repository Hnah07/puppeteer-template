import mongoose from "mongoose";

const scrapeSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Scrape = mongoose.model("Scrape", scrapeSchema);
