import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const success = (res: Response, data: any) => {
  return res.status(StatusCodes.OK).send({
    success: true,
    data
  })
}
