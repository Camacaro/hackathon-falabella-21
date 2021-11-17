import { check } from 'express-validator';
import { validBodyMiddleware } from '../validBody.middleware';

export const validationsMiddleware = () => ([
  check('name', 'El nombre es requerido').isString().isLength({min: 3}),
  check('type', 'El tipo es requerido').isString().isLength({min: 3}),
  check('status', 'El status es requerido').isString().isLength({min: 3}),
  check('field', 'El campo es requerido').isString().isLength({min: 3}),
  check('weight', 'El peso es requerido o no cumple con el rango permitido 0 - 1').isFloat({ min: 0, max: 1}),
  check('conditions', 'Las condiciones son requerido').isLength({min: 1}),
  check('conditions.*.value', 'Las condiciones deben tener un valor, es requerido').not().isEmpty(),
  check('conditions.*.weight', 'Las condiciones deden de tener un peso, es requerido').not().isEmpty(),
  validBodyMiddleware
])