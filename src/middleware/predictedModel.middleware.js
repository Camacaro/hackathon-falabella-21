import { predictedModel } from "../controller/predictedModel.controller"
import { httpResponse } from "../utils/httpResponse"

export const predictedModelMiddleware = (req, res, next) => {
  console.log('3. predictedModelMiddleware')
  try {
    const {jsonCsv} = req.body
    if(!jsonCsv) {
      return httpResponse({res, statusCode: 400, message: 'csv was not processed' })  
    }
    const dataPredicted = predictedModel(jsonCsv);

    req.body.dataPredicted = dataPredicted;

    next();
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  } 
}