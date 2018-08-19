import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';

export let getEpic = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let postEpic = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let putEpic = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let deleteEpic = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let removeEpic = (req: Request, res: Response, next: NextFunction) => {
	// soft delete
	return successHandler(res, { data: {}, status: 200 });
};
