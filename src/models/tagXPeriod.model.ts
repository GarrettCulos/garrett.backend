import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class ColorT {
	id: number;
	tagId: number;
	periodId: number;
}

const tableName = 'tagXperiod';

const options = {
	...defaultTableOptions,
	tableName: tableName,
	indexes: [
		{
			fields: ['tagId', 'periodId']
		}
	]
};

const columns = {
	id: defaultTableId,
	tagId: {
		type: sq.INTEGER,
		allowNull: false
	},
	periodId: {
		type: sq.INTEGER,
		allowNull: false
	}
};

export const tagXperiodM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
