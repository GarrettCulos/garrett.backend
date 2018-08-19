import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';

export let getPeriod = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let postPeriod = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let putPeriod = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let deletePeriod = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let removePeriod = (req: Request, res: Response, next: NextFunction) => {
	// soft delete
	return successHandler(res, { data: {}, status: 200 });
};
