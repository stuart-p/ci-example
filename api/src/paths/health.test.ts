import request from 'supertest';
import app from '../app';

const endpoint = '/health';

describe('Health Endpoint', () => {
  it('should return 200 and status ok', async () => {
    const res = await request(app).get(endpoint);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
