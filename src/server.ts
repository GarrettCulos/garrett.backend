import errorHandler from 'errorhandler';
import { initializeConnection } from './database/database.sync';

import app from './app';

/**
 * Initialize database connection
 */
initializeConnection();

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
	console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
});

export default server;
