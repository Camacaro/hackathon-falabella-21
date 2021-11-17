import { jsonToCsv } from "../../controller/csv/jsonToCsv.controller"
import { donwloadFile, httpResponse } from "../../utils/httpResponse"

export const jsonToCsvMiddleware = async (req, res, next) => {
  console.log('4. jsonToCsvMiddleware')
  try {
    const {dataPredicted} = req.body;
    if(!dataPredicted) {
      return httpResponse({res, statusCode: 400, message: 'data predicted it was not processed' })  
    }

    const filePathCsv = await jsonToCsv(dataPredicted);

    return donwloadFile({res, filePath: filePathCsv})
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}