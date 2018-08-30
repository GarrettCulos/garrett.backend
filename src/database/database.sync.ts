import db from './database';
import { model } from '../models';
import { logger, db_logger } from '../util/logger';
import { resolve } from 'bluebird';

export function initializeConnection() {
	return new Promise(async (resolve, reject) => {
		try {
			await db.sequelize.authenticate();
			// Other way:Immediate insertion of data into database
			await db.sequelize.sync();

			model.epic.q.sync().catch(db_logger.error);
			model.event.q.sync().catch(db_logger.error);
			model.me.q.sync().catch(db_logger.error);
			model.era.q.sync().catch(db_logger.error);
			model.period.q.sync().catch(db_logger.error);

			associateModels();
			resolve();
		} catch (err) {
			reject(err);
		}
	});
}

export function associateModels() {
	model.tag.q.belongsToMany(model.epic.q, { through: 'tagXepic' });
	model.epic.q.belongsToMany(model.tag.q, { through: 'tagXepic' });

	model.tag.q.belongsToMany(model.period.q, { through: 'tagXperiod' });
	model.period.q.belongsToMany(model.tag.q, { through: 'tagXperiod' });

	model.tag.q.belongsToMany(model.event.q, { through: 'tagXevent' });
	model.event.q.belongsToMany(model.tag.q, { through: 'tagXevent' });
}
