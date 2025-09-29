const mongoose = require("mongoose");
const mongoosePaginate =require("mongoose-paginate-v2");

// Create a schema
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

// create students model
const studentModel = mongoose.model("students", schema);

module.exports = studentModel;
