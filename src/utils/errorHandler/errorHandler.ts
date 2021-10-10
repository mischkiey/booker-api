// Types
import { 
  Request,
  Response,
  NextFunction,
} from 'express';

export type ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

const errorHandler: ErrorHandler = function(err, _req, res, _next) {
  if (process.env.NODE_ENV === 'production') {
    res
      .status(500)
      .json({message: 'Internal Server Error'});
  } else {
    console.error(err);
    res
      .status(500)
      .json(err);
  }
}

export default errorHandler;