import {httpStatus} from './http-status'

const isOk = (code) => code >= 200 && code <= 299

export const httpResponse = ({ res, statusCode, payload = [], message = '', description= '' }) => {

  const response = {
    ok: isOk(statusCode),
    message: message || httpStatus[statusCode].message,
    description: description || httpStatus[statusCode].description,
    payload
  }

  return res.status(statusCode).json(response)
}

export const donwloadFile = ({res, filePath}) => {
  return res.download(filePath);
}