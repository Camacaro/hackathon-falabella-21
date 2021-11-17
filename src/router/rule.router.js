import express from 'express'
import { httpResponse } from '../utils/httpResponse';
import { ruleMiddleware } from '../middleware/rules/rule.middleware';
import { addRuleMiddleware } from '../middleware/rules/addRule.middleware';
import { validationsMiddleware } from '../middleware/rules/validations.middleware';

export const ruleRouter = express();

const prefix = '/rule';

ruleRouter.get(`${prefix}/healthy`, async (req, res) => {
  return httpResponse({res, statusCode: 200})
});


ruleRouter.post(`${prefix}/get-all`, async (req, res) => {
  return ruleMiddleware(req, res);
});

ruleRouter.post(`${prefix}/add`, ...validationsMiddleware(), addRuleMiddleware);

export default ruleRouter;
