import { addRule } from '../../controller/rules/addRule.controller';
import { httpResponse } from "../../utils/httpResponse"

export const addRuleMiddleware = async (req, res, next) => {
  try {
    const rule = await addRule(req.body);
    return httpResponse({res, statusCode: 200, payload: rule })
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}
