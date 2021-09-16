import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from 'src/users/users.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET users/', () => {
    it.skip('should return all users', () => {
      //TODO
    });
  });
  
  describe('POST users/', () => {
    it.skip('should add one user', () => {
      //TODO
    });
  
    it.skip('should fail validation for firstName', () => {
      //TODO
    });
  
    it.skip('should not add user without firstName', () => {
      //TODO
    });
  
    it.skip('should fail validation for lastName', () => {
      //TODO
    });
  
    it.skip('should not add user without lastName', () => {
      //TODO
    });
  
    it.skip('should fail validation for email', () => {
      //TODO
    });
  
    it.skip('should not add user without email', () => {
      //TODO
    });
  
    it.skip('should fail validation for cellPhone Number', () => {
      //TODO
    });
  });
  
  describe('PUT users/', () => {
    it.skip('should update one user', () => {
      //TODO
    });
  
    it.skip('should fail validation for firstName', () => {
      //TODO
    });
  
    it.skip('should not add user without firstName', () => {
      //TODO
    });
  
    it.skip('should fail validation for lastName', () => {
      //TODO
    });
  
    it.skip('should not add user without lastName', () => {
      //TODO
    });
  
    it.skip('should fail validation for email', () => {
      //TODO
    });
  
    it.skip('should not add user without email', () => {
      //TODO
    });
  
    it.skip('should fail validation for cellPhone Number', () => {
      //TODO
    });
  });

  describe('DELETE users/', () => {
    it.skip('should delete one user', () => {
      //TODO
    });
  });
});