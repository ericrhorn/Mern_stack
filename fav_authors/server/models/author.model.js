const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "An Author is required"],
      minlength: [3, "Entry must be more than 3 characters"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
