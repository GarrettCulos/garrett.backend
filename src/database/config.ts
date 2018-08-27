import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const host = process.env.DB_HOST;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const connectionLimit = process.env.DB_CONNECTION_LIMIT;
const dialect = process.env.DB_DIALECT;
const timezone = process.env.DB_TIMEZONE;
const logging = false;
const pool = {
	max: parseInt(process.env.DB_POOL_MAX),
	min: parseInt(process.env.DB_POOL_MIN),
	idle: parseInt(process.env.DB_POOL_IDLE)
};

export const config = {
	development: {
		connectionLimit: parseInt(connectionLimit),
		username: user,
		password,
		database,
		host,
		dialect,
		options: {
			host,
			dialect,
			timezone,
			logging,
			pool
		}
	}
};
