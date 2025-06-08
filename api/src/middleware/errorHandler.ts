import { NextFunction, Request, Response } from 'express';
import { APIError } from '../lib/apiError';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof APIError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Internal server error' });
  return;
};
