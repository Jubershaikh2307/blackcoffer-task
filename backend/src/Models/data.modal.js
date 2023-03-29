const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    insight: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    intensity: {
      type: Number,
      required: true,
    },
    likelihood: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pestle: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    published: {
      type: String,
      required: true,
    },
    added: {
      type: String,
      required: true,
    },
    start_year: {
      type: Number,
      required: false,
    },
    end_year: {
      type: Number,
      required: false,
    },
    impact: {
      type: String,
      required: false,
    },
  });
  
  const datamodel = mongoose.model('Data', dataSchema);
  
  module.exports = datamodel;