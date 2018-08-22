import db from '../database/database';
import * as sq from 'sequelize';
import { DatabaseModel, defaultTableOptions, defaultTableId } from '../database/database.model';

export class EraT {
	id: number;
	startTime: number;
	endTime: number;
}

const tableName = 'era';

const options = {
	...defaultTableOptions,
	tableName: tableName
};

const columns: sq.DefineAttributes = {
	id: defaultTableId,
	startTime: {
		type: sq.BIGINT,
		allowNull: false
	},
	endTime: {
		type: sq.BIGINT,
		allowNull: false
	}
};

export const eraM = new DatabaseModel(
	{
		name: tableName,
		columns: columns,
		options: options
	},
	db.sequelize
);
