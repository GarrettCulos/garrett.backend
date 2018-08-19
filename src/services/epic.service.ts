import { model } from '../models';

export function getEpic(epicId?: number) {
	const options: any = {};
	if (epicId) {
		options.where = { id: epicId };
	}
	options.include = [
		{
			model: model.tag.q,
			as: 'tags'
		},
		{
			model: model.era.q,
			as: 'eras'
		}
	];
	return model.epic.q.findAll(options);
}

export function createEpic(data: any) {}
export function addEra(epicId: number) {}
export function softRemoveEpic(epicId: number) {}
export function removeEpic(epicId: number) {}
export function updateEpic(epicId: number, payload: any) {}
