import { deleteRules } from '../../controller/rules/deleteRule.controller';
import { httpResponse } from "../../utils/httpResponse"

export const deleteMiddleware = async (req, res, next) => {
  try {
    if(undefined != req.params.id){
      const rules = await deleteRules(req.params.id);
      return httpResponse({res, statusCode: 200, payload: rules})
    }
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}