import path from 'path';
import { addController } from "../controller/rule.controller";
import { httpResponse } from "../utils/httpResponse"

export const addRuleMiddleware = async (req, res, next) => {

  try {
    if (req == undefined) {
      return httpResponse({res, statusCode: 400, message: 'rule undefined' })
    }
    addController(req);
    return httpResponse({res, statusCode: 200})
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}
