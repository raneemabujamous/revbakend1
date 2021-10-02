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

const updateMethod = async (req, res) => {
  const { title } = req.body;
  const slug = req.params.slug;
  Schememod.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error, "hiiiii");
    } else {
      data[0].title = title;
      data[0].save();
      Schememod.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
module.exports = { postMethod, getFromPost, deleteMethod, updateMethod };
