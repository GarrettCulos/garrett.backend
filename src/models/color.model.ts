import db from '../database/database';
import sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class ColorT {
	id: number;
	color: string;
	name: string;
}

const tableName = 'color';

const options = {
	...defaultTableOptions,
	tableName: tableName,
	indexes: [
		{
			fields: ['color', 'name']
		}
	]
};

const columns = {
	id: defaultTableId,
	color: {
		type: sq.STRING,
		allowNull: false
	},
	name: {
		type: sq.STRING,
		allowNull: false
	}
};

export const colorM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
