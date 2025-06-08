import { errorHandler } from './errorHandler';
import { APIError } from '../lib/apiError';
import { Request, Response, NextFunction } from 'express';

describe('errorHandler middleware', () => {
  let res: Partial<Response>;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
  });

  it('Handles APIError and responds with correct status and message', () => {
    const err = new APIError('Not found', 404);
    errorHandler(
      err,
      {} as Request,
      res as Response,
      jest.fn() as NextFunction
    );
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Not found' });
  });

  it('Handles generic errors and respond with 500', () => {
    const err = new Error('Something went wrong');
    errorHandler(
      err,
      {} as Request,
      res as Response,
      jest.fn() as NextFunction
    );
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
});
