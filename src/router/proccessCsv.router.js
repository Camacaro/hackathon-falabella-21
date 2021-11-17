import express from 'express';
import { jsonToCsvMiddleware } from '../middleware/jsonToCsv.middleware';
import { predictedModelMiddleware } from '../middleware/predictedModel.middleware';
import { csvToJsonMiddleware } from '../middleware/csvToJson.middleware';
import { uploadCsv } from '../middleware/uploadCsv.middleware';

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