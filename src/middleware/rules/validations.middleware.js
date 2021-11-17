import { check } from 'express-validator';
import { validBodyMiddleware } from '../validBody.middleware';

export const validationsMiddleware = () => ([
  check('name', 'El nombre es requerido').isString().isLength({min: 3}),
  check('type', 'El tipo es requerido').isString().isLength({min: 3}),
  check('status', 'El status es requerido').isString().isLength({min: 3}),
  check('field', 'El campo es requerido').isString().isLength({min: 3}),
  check('weight', 'El peso es requerido').isString().isLength({min: 3}),
  check('conditions', 'Las condiciones son requerido').isString().isLength({min: 3}),
  validBodyMiddleware
])