import { Sequelize } from 'sequelize';
module.exports = {
	up: (queryInterface: any, seq: Sequelize) => {
		return queryInterface.bulkInsert(
			'tag',
			[
				{
					tag: 'school',
					description: 'school stuff',
					color: '#c92484',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					tag: 'work',
					description: 'school stuff',
					color: '#d73a4a',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					tag: 'maggie',
					description: 'school stuff',
					color: '#1c5196',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					tag: 'magic tha gathering',
					description: 'school stuff',
					color: '#5319e7',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					tag: 'code',
					description: 'school stuff',
					color: '#48d68d',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					tag: 'athletics',
					description: 'exercise and stuff',
					color: '#fbca04',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					tag: 'outreach',
					description: 'interacting with the community',
					color: '#4c0577',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
	down: (queryInterface: any, seq: Sequelize) => {
		return queryInterface.bulkDelete('tag', undefined, {});
	}
};
