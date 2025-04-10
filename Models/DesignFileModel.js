const mongoose = require("mongoose");

const designFileSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    canvasData: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("DesignFile", designFileSchema);
