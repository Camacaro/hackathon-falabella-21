import path from 'path';
import { ruleController } from "../../controller/rule.controller";
import { httpResponse } from "../../utils/httpResponse"

export const ruleMiddleware = async (req, res, next) => {

  try {
    if (req == undefined) {
      return httpResponse({res, statusCode: 400, message: 'rule undefined' })
    }
    const response =  ruleController(req);
    return httpResponse({res, statusCode: 200, payload: response})
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}
