import { epicRoutes } from './epic.router';
import { eventRoutes } from './event.router';
import { meRoutes } from './me.router';
import { periodRoutes } from './period.router';

export const router = {
	epic: epicRoutes,
	event: eventRoutes,
	me: meRoutes,
	period: periodRoutes
};
