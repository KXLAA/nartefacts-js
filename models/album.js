/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: String,
  type: String,
  artist: { name: String, photoURL: String },
  albumArt: String,
  urls: { spotify: String, apple: String },
  colors: [String],
  likeCount: { type: Number, minimum: 0 },
});

albumSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const object = returnedObject;
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  },
});

const Album = mongoose.model('Album', albumSchema);

export default Album;
