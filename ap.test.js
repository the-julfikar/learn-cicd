const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', "Welcome to the learning of CI/CD with Github Actions...(:");
    expect(res.body.dev).toBe('Julfikar');
  });
});
