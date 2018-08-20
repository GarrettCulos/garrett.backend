import { Sequelize } from 'sequelize';
import { model } from '../models';
module.exports = {
	up: (queryInterface: any, seq: Sequelize) => {
		model.tag.q.sync();
		return queryInterface.bulkInsert(
			'tag',
			[
				{
					tag: 'school',
					description: 'school stuff',
					color: '#c92484'
				},
				{
					tag: 'work',
					description: 'school stuff',
					color: '#d73a4a'
				},
				{
					tag: 'maggie',
					description: 'school stuff',
					color: '#1c5196'
				},
				{
					tag: 'magic tha gathering',
					description: 'school stuff',
					color: '#5319e7'
				},
				{
					tag: 'code',
					description: 'school stuff',
					color: '#48d68d'
				},
				{
					tag: 'athletics',
					description: 'exercise and stuff',
					color: '#fbca04'
				},
				{
					tag: 'outreach',
					description: 'interacting with the community',
					color: '#4c0577'
				}
			],
			{}
		);
	},
	down: (queryInterface: any, seq: Sequelize) => {
		return queryInterface.bulkDelete('tag', undefined, {});
	}
};
