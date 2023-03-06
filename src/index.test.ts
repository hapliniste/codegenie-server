import { server } from '@/setupTests';

describe('server', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should return a 200 OK status for the / endpoint', async () => {
    const response = await fetch('http://localhost:3000/');

    expect(response.status).toBe(200);
  });
});
