import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const success = (res: Response, data: any) => {
  return res.status(StatusCodes.OK).send({
    success: true,
    data
  })
};

export const error = (res: Response, message: string, statusCode: StatusCodes) => {
  return res.status(statusCode).send({
    success: false,
    data: message,
  })
};
