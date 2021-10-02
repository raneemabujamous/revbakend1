const mongoose = require("mongoose");
const axios = require("axios");
const ArtMod = require("../module/Apimodule");

const getDatFromApi = async (req, res) => {
  const url = `https://api.artic.edu/api/v1/artworks?limit=10`;
  await axios
    .get(url)
    .then((request) => {
      const reqdata = request.data.data;
      const dataMap = reqdata.map((item) => {
        return new ArtMod(item);
      });
      res.send(dataMap);
    })
    .catch((err) => {
      console.log(err, "from api cathch");
    });
};
module.exports = { getDatFromApi };
