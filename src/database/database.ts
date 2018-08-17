import dotenv from 'dotenv';
import mysql from 'mysql';
import Sequelize from 'sequelize';
import { logger } from '../util/logger';
import { config } from './config';

class DatabaseConnection {

	readonly pool: any;
	
	readonly sequelize: any;

	constructor(data: {
		pool: any,
		sequelize: any
	}) {
		this.pool = data.pool;
		this.sequelize = data.sequelize;
	}

}

const pool = mysql.createPool({
	connectionLimit: config.connection_limit,
	host:            config.options.host,
	user:            config.username,
	password:        config.password,
	database:        config.database
});

const sequelize = new Sequelize( 
	config.database, 
	config.username, 
	config.password, 
	config.options
);

const db = new DatabaseConnection({
	pool: pool,
	sequelize: sequelize
});

export default db;