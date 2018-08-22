import { Sequelize } from 'sequelize';

module.exports = {
	up: (queryInterface: any, seq: Sequelize) => {
		return queryInterface.bulkInsert(
			'period',
			[
				{
					title: 'MSc in Applied Mathematics',
					description: 'Masters program in Mathematic at UVIC',
					startTime: new Date('2013/09/01').getTime(),
					endTime: new Date('2016/10/01').getTime(),
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: 'Life',
					description: 'me, alive',
					startTime: new Date('1990/07/04').getTime(),
					endTime: undefined,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: 'work',
					description: 'Job as a Software Engineer at Highwaythree solutions.',
					startTime: new Date('2016/11/01').getTime(),
					endTime: undefined,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
	down: (queryInterface: any, seq: Sequelize) => {
		return queryInterface.bulkDelete('period', undefined, {});
	}
};
