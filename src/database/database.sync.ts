import db from './database';
import { model } from '../models';
import { logger, db_logger } from '../util/logger';

export function initializeConnection() {

	db.sequelize.authenticate().then(() => {
		
		// Other way:Immediate insertion of data into database
		db.sequelize.sync().then( () => {
			model.epic.q.sync().catch( db_logger.error );
			model.event.q.sync().catch( db_logger.error );
			model.me.q.sync().catch( db_logger.error );
			model.color.q.sync().catch( db_logger.error );
			model.era.q.sync().catch( db_logger.error );
			model.period.q.sync().catch( db_logger.error );
			
			model.tag.q.belongsToMany( model.epic.q, { through: model.tagXepic.q } );
			model.tag.q.belongsToMany( model.period.q, { through: model.tagXperiod.q } );
			model.tag.q.belongsToMany( model.event.q, { through: model.tagXevent.q } );

			logger.info('Table Created');

		});

	});
}
