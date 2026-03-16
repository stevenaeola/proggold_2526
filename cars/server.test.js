
'use strict';

const request = require('supertest');

const app = require('./app');
// set flag so the app knows not to save new data to file
app.TESTING = true;

describe('Test the character service', () => {
    test('GET /character/list succeeds', () => {
        return request(app)
	    .get('/character/list')
	    .expect(200);
    });

    test('GET /character/list returns JSON', () => {
        return request(app)
	    .get('/character/list')
	    .expect('Content-type', /json/);
    });

    test('GET /character/search handles missing parameter', () => {
        return request(app)
	    .get('/character/search')
	    .expect(400);
    });

    test('POST /character/new succeeds', () => {
        const params = {'name': 'Testy McTestface', 'imageURL': 'Testy'};
        return request(app)
        .post('/character/new')
        .send(params)
	    .expect(200);
    });

    test('GET /character/list includes Lightning McQueen', () => {
        return request(app)
	    .get('/character/list')
	    .expect(/McQueen/);
    });

});