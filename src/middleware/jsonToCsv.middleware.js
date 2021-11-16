import { jsonToCsv } from "../controller/jsonToCsv.controller"
import { donwloadFile, httpResponse } from "../utils/httpResponse"

export const jsonToCsvMiddleware = async (req, res, next) => {
  console.log('4. jsonToCsvMiddleware')
  try {
    const {dataPredited} = req.body;
    if(!dataPredited) {
      return httpResponse({res, statusCode: 400, message: 'data predited it was not processed' })  
    }

    const filePathCsv = await jsonToCsv(dataPredited);

    return donwloadFile({res, filePath: filePathCsv})
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}