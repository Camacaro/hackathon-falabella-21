import { getRules } from '../../controller/rules/getRules.controller';
import { httpResponse } from "../../utils/httpResponse"

export const ruleMiddleware = async (req, res, next) => {
  try {
    const response =  getRules();
    return httpResponse({res, statusCode: 200, payload: response})
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}
