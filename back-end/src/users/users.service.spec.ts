import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.skip('should find a user', () => {
    expect(service).toBeDefined();
  });

  it.skip('should create a user', () => {
    expect(service).toBeDefined();
  });

  it.skip('should update a user', () => {
    expect(service).toBeDefined();
  });

  it.skip('should delete a user', () => {
    expect(service).toBeDefined();
  });

});
