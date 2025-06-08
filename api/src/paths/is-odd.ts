import { Router } from 'express';
import { APIError } from '../lib/apiError';

const router = Router();

router.post('/', (req, res, next) => {
  try {
    const { number } = req.body;

    if (typeof number !== 'number') {
      throw new APIError('Input must be a number', 400);
    }

    if (!Number.isInteger(number)) {
      res.status(200).json({
        isOdd: false
      });
      return;
    }

    const isOdd = number % 2 !== 0;

    res.status(200).json({
      isOdd
    });
    return;
  } catch (error) {
    next(error);
  }
});

export default router;
