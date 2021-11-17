import { Rule } from "../../schemas/ruleSchema";

export const deleteRules = async (ruleBody) => {
 Rule.deleteOne(ruleBody, function (err) {
        if (err) return handleError(err);
  });
  return true;
}