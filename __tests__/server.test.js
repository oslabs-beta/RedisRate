const mongoose = require('mongoose');
const request = require('supertest');
const server = 'http://localhost:4000';
require('dotenv').config()


describe('User route', () => {

   const MONGO_URI = process.env.SECRET;
        
	beforeAll((done) => {
      mongoose.connect(MONGO_URI);
      done();
	})
	
   describe('/login', () => {
      it('checks username and password and signs in user', () => {
         return request(server)
            .post('/login')
            .send({
					username: 'mango',
					password: 'mango'
            })
            .expect('Content-Type', /json/)
            .expect({isUserLoggedIn: true})
            .expect(200);
         });      
   });

   describe('/signup', () => {
      it('adds user to database', () => {
         return request(server)
            .post('/signup')
            .send({
               firstName: 'First',
               lastName: 'Last',
					username: 'test',
					password: 'test'
            })
            .expect('Content-Type', /json/)
            .expect({isUserLoggedIn: true})
            .expect(200);
         });      
   });

   describe('/connect', () => {
      it('connects to database', () => {
         return request(server)
            .post('/connect')
            .send({
               port: '6379',
               ipaddress: '127.0.0.1',
					password: 'foobared'
            })
            .expect('Content-Type', /json/)
            .expect(200);
         });      
   });

   afterAll((done) => {
      mongoose.connection.close(MONGO_URI);
      done();
	})
});