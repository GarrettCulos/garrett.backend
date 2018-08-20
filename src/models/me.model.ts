import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class MeT {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	middleNames: string;
	phoneNumber: number;
}

const tableName = 'me';

const options = {
	...defaultTableOptions,
	tableName: tableName
};

const columns: sq.DefineAttributes = {
	id: defaultTableId,
	firstName: {
		type: sq.STRING,
		allowNull: true
	},
	lastName: {
		type: sq.STRING,
		allowNull: true
	},
	middleNames: {
		type: sq.STRING,
		allowNull: true
	},
	email: {
		type: sq.STRING,
		allowNull: true
	},
	phoneNumber: {
		type: sq.INTEGER,
		allowNull: false
	}
};

export const meM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
