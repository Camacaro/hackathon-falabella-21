import express from 'express';
import { jsonToCsvMiddleware } from '../middleware/csv/jsonToCsv.middleware';
import { predictedModelMiddleware } from '../middleware/csv/predictedModel.middleware';
import { csvToJsonMiddleware } from '../middleware/csv/csvToJson.middleware';
import { uploadCsv } from '../middleware/csv/uploadCsv.middleware';

const proccessCsvRouter = express();

const prefix = '/csv';

proccessCsvRouter.post(
  `${prefix}/upload`, 
  uploadCsv.single("file"), 
  csvToJsonMiddleware, 
  predictedModelMiddleware,
  jsonToCsvMiddleware
);

export default proccessCsvRouter;