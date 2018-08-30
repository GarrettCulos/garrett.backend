import request from 'supertest';
import { initializeConnection } from '../../src/database/database.sync';
import app from '../../src/app';

describe('ROUTING - event', () => {
	it('should return 200 for getEvents', () => {
		initializeConnection()
			.then(res => {
				return request(app)
					.get('/api/v1/event')
					.expect(200);
			})
			.catch(err => console.log(err));
	});

	it('should return 400 for post /event ', () => {
		return request(app)
			.post('/api/v1/event')
			.expect(400);
	});

	it('should return 400 for put /event ', () => {
		return request(app)
			.put('/api/v1/event')
			.expect(400);
	});

	it('should return 400 for delete /event ', () => {
		return request(app)
			.delete('/api/v1/event')
			.expect(400);
	});
});
