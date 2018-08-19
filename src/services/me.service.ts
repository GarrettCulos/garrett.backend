import { model } from '../models';

export function getMe() {
	const options: any = {
		where: { id: 1 }
	};
	return model.me.q.findAll(options);
}

export function updateMe(me: any) {}
