import { Request, Response, NextFunction } from 'express';
import { errorHandler, successHandler } from '../util/router';
import { logger } from '../util/logger';
import { services } from '../services';

export let getEvent = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const events = await services.eventService.getEvent();
		return successHandler(res, { data: events, status: 200 });
	} catch (error) {
		return errorHandler(res, { status: 500, message: error, source: 'getEvents query' });
	}
};

export let postEvent = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let putEvent = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let deleteEvent = (req: Request, res: Response, next: NextFunction) => {
	return successHandler(res, { data: {}, status: 200 });
};

export let removeEvent = (req: Request, res: Response, next: NextFunction) => {
	// soft delete
	return successHandler(res, { data: {}, status: 200 });
};
