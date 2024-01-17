import { RequestHandler, Request, Response } from 'express';

import * as bandService from '../services/band.service';
import { success, error } from '../utils/format-response';
import { StatusCodes } from 'http-status-codes';

export const update = async (req: Request, res: Response, next: RequestHandler) => {
  const { params: { id } } = req;
  const { body: { name } } = req;

  try {
    if (!name) {
      return error(res, "The field name is required", StatusCodes.BAD_REQUEST);
    }

    const data = await bandService.update(Number(id), name);

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
}

export const create = async (req: Request, res: Response, next: RequestHandler) => {
  const { body: { name } } = req;

  try {
    if (!name) {
      return error(res, "The field name is required", StatusCodes.BAD_REQUEST);
    }

    const data = await bandService.create(name);

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
};

export const all = async (req: Request, res: Response, next: RequestHandler) => {
  try {
    const data = await bandService.all();

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
};

export const byId = async (req: Request, res: Response, next: RequestHandler) => {
  const { params: { id } } = req;

  try {
    const data = await bandService.byId(Number(id));

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
};
