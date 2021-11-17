import path from 'path'
import {createObjectCsvWriter} from 'csv-writer'
import { headersCsv } from '../utils/headersCsv';

<<<<<<< HEAD
export const jsonToCsv = (json) => {
  return json;
=======
export const jsonToCsv = async (json) => {  
  const filePath = path.resolve( __dirname , `../cvsProcessed/${new Date().toISOString()}.csv`)

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: headersCsv
  });

  await csvWriter.writeRecords(json)

  return filePath
>>>>>>> main
}