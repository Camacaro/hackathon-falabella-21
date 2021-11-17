import express from 'express'
import { httpResponse } from '../utils/httpResponse';
import { ruleMiddleware } from '../middleware/rules/rule.middleware';
import { addRuleMiddleware } from '../middleware/rules/addRule.middleware';
import { validationsMiddleware } from '../middleware/rules/validations.middleware';
import { deleteMiddleware } from '../middleware/rules/delete.middleware';

export const ruleRouter = express();

const prefix = '/rule';

ruleRouter.get(`${prefix}/healthy`, async (req, res) => {
  return httpResponse({res, statusCode: 200})
});

ruleRouter.get(`${prefix}/all`, ruleMiddleware);

ruleRouter.post(`${prefix}/add`, ...validationsMiddleware(), addRuleMiddleware);

ruleRouter.delete(`${prefix}/delete/:id`, deleteMiddleware);

export default ruleRouter;
