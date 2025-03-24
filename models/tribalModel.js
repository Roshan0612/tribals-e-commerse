const mongoose = require('mongoose');

const tribalUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  uniqueId: { type: String, unique: true, required: true }, // You can generate this using a package like `uuid`
});

module.exports = mongoose.model('TribalUser', tribalUserSchema);
