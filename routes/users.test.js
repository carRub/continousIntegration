const request = require('supertest');
const app = require('../app');

test('get users', async() => {
    const answer = await request(app)
                    .get('/users')
                    .expect(200);
    console.log(answer.body);
    expect(Array.isArray(answer.body)).toBeTruthy();

})

describe('get users successful and unsuccesful', async() => {
    test('exists', async() => {
        const answer = await request(app)
                            .get('/users/test@mail.com')
                            .expect(200);
        expect(answer.body).toBeTruthy();
        expect(resp.body.email).toBe('test@mail.com')
    })

    test('does not exists', async() => {
        const answer = await request(app)
                            .get('/users/test@email.com')
                            .expect(400);
        expect(answer.body.error).toBeTruthy();
        expect(answer.body.error).toBe('does not exist');
        
    });

    //falta
    // test('successfully posted', )

})