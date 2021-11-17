
import { Schema, model } from 'mongoose'

const RuleSchema = Schema({
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
    type: Number,
    required: true,
  },
  conditions: [{
    value: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    }
  }]
});


RuleSchema.methods.toJSON = function() {
  const { __v, ...data  } = this.toObject();
  return data;
}

export const Rule = model("Rule", RuleSchema);