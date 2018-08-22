import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class PeriodT {
	id: number;
	title: string;
	description: string;
	startTime: number;
	endTime: number;
}

const tableName = 'period';

const options = {
	...defaultTableOptions,
	tableName: tableName
};

const columns: sq.DefineAttributes = {
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

export const periodM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
