import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class EpicT {
	id: number;
	title: string;
	description: string;
	startTime: number;
	endTime: number;
}

const tableName = 'epic';

const options = {
	...defaultTableOptions,
	tableName: tableName,
	indexes: [
		{
			fields: ['title']
		}
	]
};

export const columns = {
	id: defaultTableId,
	title: {
		type: sq.STRING,
		allowNull: false
	},
	description: {
		type: sq.STRING,
		allowNull: false
	},
	startTime: {
		type: sq.BIGINT,
		allowNull: false
	},
	endTime: {
		type: sq.BIGINT,
		allowNull: true
	}
};

export const epicM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
