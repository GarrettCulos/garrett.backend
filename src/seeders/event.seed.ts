import { Sequelize } from 'sequelize';
import { model } from '../models';

module.exports = {
	up: (qi: any, seq: Sequelize) => {
		return qi.bulkInsert(
			'event',
			[
				{
					title: 'garrett got a job',
					description: 'I started by new job at h3. Its super awesome!',
					time: new Date().getTime(),
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: 'garrett got more responsibility at h3',
					description: 'I started getting more important tasks, higher leverage.',
					time: new Date().getTime(),
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
	down: (qi: any, seq: Sequelize) => {
		return qi.bulkDelete('event', undefined, {});
	}
};
