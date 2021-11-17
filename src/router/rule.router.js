import express from 'express'
import { httpResponse } from '../utils/httpResponse';
import { ruleMiddleware } from '../middleware/rule.middleware';

export const ruleRouter = express();

const prefix = '/rule';

ruleRouter.get(`${prefix}/healthy`, async (req, res) => {
  return httpResponse({res, statusCode: 200})
});


ruleRouter.post(`${prefix}/get-all`, async (req, res) => {
  console.log('prrueba');
  return ruleMiddleware(req, res);
});

export default ruleRouter;
