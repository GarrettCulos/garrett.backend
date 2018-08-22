import { Response } from 'express';
import { logger } from './logger';

class ErrorHandlerInput {
	status: number;
	message: string;
	reason?: string;
	source?: string;
}
export function errorHandler(res: Response, { status, message, reason, source }: ErrorHandlerInput): Response {
	const response: any = {};
	response.status = status ? status : 500;
	response.reason = reason ? reason : undefined;
	response.message = message ? message : undefined;
	response.source = source ? source : undefined;
	logger.error(source, message);
	return res.status(response.status).send(response);
}

class SuccessHandlerInput {
	data: any;
	message?: string;
	status: number = 200;
}
export function successHandler(res: Response, { data, message, status }: SuccessHandlerInput): Response {
	const response: any = {};
	response.status = status;
	response.data = data;
	response.message = message ? message : undefined;
	return res.status(status).send(response);
}
