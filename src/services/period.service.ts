import { model } from '../models';

export function getPeriod(periodId?: number) {
	const options: any = {};
	if (periodId) {
		options.where = { id: periodId };
	}
	options.include = [
		{
			model: model.tag.q,
			as: 'tags'
		}
	];
	return model.period.q.findAll(options);
}

export function addPeriod(period: any) {}
export function softRemovePeriod(periodId: number) {}
export function removePeriod(periodId: any) {}
export function updatePeriod(periodId: number, period: any) {}
