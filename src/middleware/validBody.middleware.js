import { validationResult } from 'express-validator';
import { httpResponse } from '../utils/httpResponse';

export const validBodyMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return httpResponse({
      res,
      statusCode: 400,
      payload: errors.mapped()
    });
  }

  return next();
};
