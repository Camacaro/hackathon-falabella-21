import express from 'express'
import { httpResponse } from '../utils/httpResponse';
import { ruleMiddleware } from '../middleware/rule.middleware';
import { addRuleMiddleware } from '../middleware/addRule.middleware';

export const ruleRouter = express();

const prefix = '/rule';

ruleRouter.get(`${prefix}/healthy`, async (req, res) => {
  return httpResponse({res, statusCode: 200})
});


ruleRouter.post(`${prefix}/get-all`, async (req, res) => {
  return ruleMiddleware(req, res);
});

ruleRouter.post(`${prefix}/add-rule`, async (req, res) => {
  return addRuleMiddleware(req, res);
});

export default ruleRouter;
