import db from '../database/database';
import sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class TagT {
	id: number;
	tag: string;
	description: string;
	color: string;
}

const tableName = 'tag';

const options = {
	...defaultTableOptions,
	tableName: tableName
};

const columns: sq.DefineAttributes = {
	id: defaultTableId,
	tag: {
		type: sq.STRING,
		allowNull: false
	},
	description: {
		type: sq.STRING,
		allowNull: false
	},
	color: {
		type: sq.STRING,
		allowNull: false
	}
};

export const tagM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
