"use strict";
const Schememod = require("../module/Schememodel");
const postMethod = async (req, res) => {
  const { title, width, height } = req.body;
  const slug = title.toLowerCase().split(" ").join("_");
  Schememod.find({ title: title }, (error, data) => {
    if (data.length) {
      console.log("data exist");
    } else {
      const newSchema = new Schememod({
        title: title,
        slug: slug,
        width: width,
        height: height,
      });

      newSchema.save();
      res.send(newSchema);
    }
  });
};

const getFromPost = async (req, res) => {
  Schememod.find({}, (error, data) => {
    res.send(data);
  });
};
const deleteMethod = async (req, res) => {
  const slug = req.params.slug;
  Schememod.remove({ slug: slug }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      Schememod.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
module.exports = { postMethod, getFromPost, deleteMethod };
