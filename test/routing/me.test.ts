import request from 'supertest';
import { initializeConnection } from '../../src/database/database.sync';
import app from '../../src/app';

describe('ROUTING - me', () => {
	it('should return 200 for getMe', () => {
		initializeConnection()
			.then(res => {
				return request(app)
					.get('/api/v1/me')
					.expect(200);
			})
			.catch(err => console.log(err));
	});

	it('should return 400 for post /me ', () => {
		return request(app)
			.post('/api/v1/me')
			.expect(400);
	});

	it('should return 400 for put /me ', () => {
		return request(app)
			.put('/api/v1/me')
			.expect(400);
	});

	it('should return 400 for delete /me ', () => {
		return request(app)
			.delete('/api/v1/me')
			.expect(400);
	});
});
