import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('find', () => {
    it.skip('should return all users', () => {
      //TODO
    });
  });
  
  describe('create', () => {
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
  
  describe('update', () => {
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

  describe('delete', () => {
    it.skip('should delete one user', () => {
      //TODO
    });
  });
  
});
