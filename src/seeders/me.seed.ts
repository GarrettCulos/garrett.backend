import { Sequelize } from 'sequelize';

module.exports = {
	up: (qi: any, seq: Sequelize) => {
		return qi.bulkInsert(
			'me',
			[
				{
					firstname: 'garrett',
					lastName: 'culos',
					middleNames: 'James',
					phoneNumber: 1234567890,
					email: 'garrettculos@gmail.com',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
	down: (qi: any, seq: Sequelize) => {
		return qi.bulkDelete('me', undefined, {});
	}
};
