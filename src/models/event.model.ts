import db from '../database/database';
import sq from 'sequelize';
import { DatabaseModel, 
	defaultTableOptions, 
	defaultTableId } from '../database/database.model';

export class EventT {
	id: number;
	title: string;
	description: string;
	time: number;
}

const tableName = 'event';

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
	time: { 
		type: sq.STRING, 
		allowNull: false
	}
};

export const eventM = new DatabaseModel({ 
	name: tableName,
	columns: columns,
	options: options
}, db.sequelize);
