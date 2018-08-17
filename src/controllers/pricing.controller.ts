import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import db from '../database/database';
import { services } from '../services';

export let getPrice = (req: Request, res: Response, next: NextFunction ) => {
	return successHandler( res, { data: {}, status: 200 });

};

export let addPrice = ( req: Request, res: Response, next: NextFunction ) => {
		return successHandler( res, { data: {}, status: 200 });
};
