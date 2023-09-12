const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

    
        describe('GET /dogs/1', () => {
    it('responds with 200', async () => {
        await agent.get('/dogs/1').expect(200);
    });
});


describe('GET /dogs', () => {    
    it('responds with 200', async () => {
        await agent.get('/dogs').expect(200);
    });
}   );      

