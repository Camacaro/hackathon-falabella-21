const mongoose = require('../service/db/mongodb-connection');

const Schema = mongoose.Schema;

// const schemas = {
const ruleShema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  conditions: {
    type: String,
    required: true,
  }
});


const Rule = mongoose.model("Rule", ruleShema);

module.exports = Rule;