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