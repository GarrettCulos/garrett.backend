export const config = {
	development: {
		connectionLimit: 100,
		username: 'root',
		password: '',
		database: 'garrett',
		host: '127.0.0.1',
		dialect: 'mysql',
		options: {
			host: '127.0.0.1',
			dialect: 'mysql',
			timezone: 'America/Los_Angeles',
			logging: false,
			pool: {
				max: 100,
				min: 0,
				idle: 10000
			}
		}
	}
};
