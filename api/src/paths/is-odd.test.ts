import request from 'supertest';
import app from '../app';

const endpoint = '/is-odd';
describe('POST /', () => {
  it('returns true for odd numbers', async () => {
    const res = await request(app).post(endpoint).send({ number: 3 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ isOdd: true });
  });

  it('returns false for even numbers', async () => {
    const res = await request(app).post(endpoint).send({ number: 4 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ isOdd: false });
  });

  it('returns false for zero', async () => {
    const res = await request(app).post(endpoint).send({ number: 0 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ isOdd: false });
  });

  it('returns true for negative odd numbers', async () => {
    const res = await request(app).post(endpoint).send({ number: -5 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ isOdd: true });
  });

  it('returns false for decimal numbers', async () => {
    const res = await request(app).post(endpoint).send({ number: 2.5 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ isOdd: false });
  });

  it('returns 400 for missing number', async () => {
    const res = await request(app).post(endpoint).send({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Input must be a number' });
  });

  it('returns 400 for non-number input', async () => {
    const res = await request(app).post(endpoint).send({ number: 'abc' });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Input must be a number' });
  });

  it('returns 400 for null input', async () => {
    const res = await request(app).post(endpoint).send({ number: null });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Input must be a number' });
  });

  it('returns 400 for infinite input', async () => {
    const res = await request(app).post(endpoint).send({ number: Infinity });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Input must be a number' });
  });
});
