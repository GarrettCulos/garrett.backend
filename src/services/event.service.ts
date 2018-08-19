import { model } from '../models';

export function getEvent(eventId?: number) {
	const options: any = {};
	if (eventId) {
		options.where = { id: eventId };
	}
	options.include = [
		{
			model: model.tag.q,
			as: 'tags'
		}
	];
	return model.event.q.findAll(options);
}

export function addEvent(event: any) {}
export function softRemoveEvent(eventId: number) {}
export function removeEvent(eventId: number) {}
export function updateEvent(event: any) {}
