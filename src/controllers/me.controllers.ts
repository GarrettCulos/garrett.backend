import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';

export let getMe = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let postMe = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let putMe = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let deleteMe = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let removeMe = (req: Request, res: Response, next: NextFunction) => {
	// soft delete
	return successHandler(res, { data: {}, status: 200 });
};
