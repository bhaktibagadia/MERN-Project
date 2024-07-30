const {Schema, model, default: mongoose} = require("mongoose");

const additionalSchema = new Schema({
    name: {type: String, required: true},
    bloodGroup: {type: String, required: true},
    location: {type: String, required: true},
    isFit: {type: Boolean, required: true},
});

const Additional = new model('Additional', additionalSchema);
module.exports = Additional;