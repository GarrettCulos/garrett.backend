import request from 'supertest';
import app from '../../src/app';

describe('ROUTING - pricing', () => {

	it('should pricing return 200 okay', () => {
		return request(app).get('/api/v1/price?cardName=brainstorm').expect(200);
	});

	it('should pricing return 200 okay when setCode is given', () => {
		return request(app).get('/api/v1/price?cardName=brainstorm&setCode=MKD').expect(200);
	});

	it('should pricing return 400 okay when no cardName is given', () => {
		return request(app).get('/api/v1/price').expect(400);
	});

});
