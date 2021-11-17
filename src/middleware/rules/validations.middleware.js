import { check } from 'express-validator';
import { validBodyMiddleware } from '../validBody.middleware';

export const validationsMiddleware = () => ([
  check('test', 'El test interno es requerido').isString().isLength({ min: 3 }),
  "name": "OPERATOR_TYPE",
  "type": "MULTIPLE",
  "status": "ACTIVE",
  "field": "operatorType",
  "weight": "0.8",
  "conditions": "array"
  validBodyMiddleware
])