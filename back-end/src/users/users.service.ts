import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserQuery } from './dto/get-user.query';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async find(query?:GetUserQuery): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(User: CreateUserDto): Promise<User> {
    return await this.userRepository.save(User);
  }

  async update(id: number, User: UpdateUserDto): Promise<UpdateResult> {
    return await this.userRepository.update(id, User);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
  
}
