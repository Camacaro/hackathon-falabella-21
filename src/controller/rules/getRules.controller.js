import { Rule } from "../../schemas/ruleSchema";

export const getRules = async () => {
  const rules = await Rule.find({})  
  return rules;
}