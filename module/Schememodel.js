"use strict";
const mongoose = require("mongoose");
const Schememod = mongoose.Schema({
  title: { type: String, unique: true },
  slug: { type: String, unique: true, tolowercase: true, trim: true },
  width: { type: String },
  height: { type: String },
});
const ModelSchema = mongoose.model("artcollection", Schememod);
module.exports = ModelSchema;
