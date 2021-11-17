import { Rule } from "../../schemas/ruleSchema";

export const addRule = async (ruleBody) => {
  let rule = new Rule();

  rule.name = ruleBody.name;
  rule.type = ruleBody.type;
  rule.status = ruleBody.status;
  rule.field = ruleBody.field;
  rule.weight = ruleBody.weight;
  rule.conditions = ruleBody.conditions;

  rule = await rule.save();

  return rule;
}