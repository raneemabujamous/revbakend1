"use strict";
class ArtMod {
  constructor(data) {
    this.title = data.title;
    this.width = data.thumbnail.width;
    this.height = data.thumbnail.height;
  }
}
module.exports = ArtMod;
