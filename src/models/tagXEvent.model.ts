import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

const tableName = 'tagXevent';

const options = {
	...defaultTableOptions,
	tableName: tableName,
	indexes: [
		{
			fields: ['tagId', 'eventId']
		}
	]
};

const columns = {
	id: defaultTableId,
	tagId: {
		type: sq.INTEGER,
		allowNull: false
	},
	eventId: {
		type: sq.INTEGER,
		allowNull: false
	}
};

export const tagXeventM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
