const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ApiSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  admin: {
    type: Array,
    required: true
  },
  auth: {
    type: Object
  }
}, {
  strict: false,
  _id: false,
});

module.exports = API = mongoose.model('API', ApiSchema)