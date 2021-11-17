import path from 'path';
import { csvToJson } from "../../controller/csv/csvToJson.controller";
import { httpResponse } from "../../utils/httpResponse"

export const csvToJsonMiddleware = async (req, res, next) => {
  console.log('2. csvToJsonMiddleware')
  try {
    if (req.file == undefined) {
      return httpResponse({res, statusCode: 400, message: 'Please upload a CSV file!' })
    }

    const filePath = path.resolve( __dirname , `../../uploads/${req.file.filename}`)

    const jsonCsv = await csvToJson(filePath);
    
    req.body.jsonCsv = jsonCsv;
    next();
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}