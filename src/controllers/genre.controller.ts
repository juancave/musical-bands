import { RequestHandler, Request, Response } from 'express';

import * as genreService from '../services/genre.service';
import { success } from '../utils/format-response';

export const create = async (req: Request, res: Response, next: RequestHandler) => {
  try {
    const data = await genreService.create(req.body);

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
}

export const all = async (req: Request, res: Response, next: RequestHandler) => {
  try {
    const data = await genreService.all();

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
}

export const byId = async (req: Request, res: Response, next: RequestHandler) => {
  const { params: { id } } = req;

  try {
    const data = await genreService.byId(Number(id));

    return success(res, data);
  } catch (err: any) {
    next(req, res, err);
  }
}
