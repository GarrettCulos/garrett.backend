import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

const tableName = 'tagXepic';

const options = {
	...defaultTableOptions,
	tableName: tableName,
	indexes: [
		{
			fields: ['tagId', 'epicId']
		}
	]
};

const columns = {
	id: defaultTableId,
	tagId: {
		type: sq.INTEGER,
		allowNull: false
	},
	epicId: {
		type: sq.INTEGER,
		allowNull: false
	}
};

export const tagXepicM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
