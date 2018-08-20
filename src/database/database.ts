import mysql from 'mysql';
import Sequelize from 'sequelize';
import { config } from './config';

class DatabaseConnection {
	readonly pool: any;

	readonly sequelize: any;

	constructor(data: { pool: any; sequelize: any }) {
		this.pool = data.pool;
		this.sequelize = data.sequelize;
	}
}

const env = 'development';

const pool = mysql.createPool({
	connectionLimit: config[env].connectionLimit,
	host: config[env].options.host,
	user: config[env].username,
	password: config[env].password,
	database: config[env].database
});

const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env].options);

const db = new DatabaseConnection({
	pool: pool,
	sequelize: sequelize
});

export default db;
