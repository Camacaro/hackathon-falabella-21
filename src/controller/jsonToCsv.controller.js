import moduleName from 'path
'
import {createObjectCsvWriter} from 'csv-writer'

export const jsonToCsv = (json) => {  

  const filePath = 
  const csvWriter = createObjectCsvWriter({
      path: 'path/to/file.csv',
      header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'}
      ]
  });


  return json[0]
}