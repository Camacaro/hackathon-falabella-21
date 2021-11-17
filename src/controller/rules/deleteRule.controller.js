import { Rule } from "../../schemas/ruleSchema";

export const deleteRules = async (idRule) => {
 Rule.deleteOne({ _id: idRule}, function (err) {
        if (err) return handleError(err);
  });
  return true;
}