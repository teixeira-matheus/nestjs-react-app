import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  
  constructor(private usersService: UsersService){}

  @Get()
  @ApiOkResponse({ description: 'Get all Users', type: User, isArray: true})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async find(): Promise<User[]> {
    return this.usersService.find();
  }

  @Post()
  @ApiCreatedResponse({ description: 'User added', type: User})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: CreateUserDto})
  async create(@Body() UserData: CreateUserDto): Promise<User> {
    return this.usersService.create(UserData);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'User updated'})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiBody({type: UpdateUserDto})
  async update(@Param('id', ParseIntPipe) id:number, @Body() UserData: UpdateUserDto): Promise<UpdateResult> {
    return this.usersService.update(id, UserData);
  }  

  @Delete(':id')
  @ApiOkResponse({ description: 'User deleted '})
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  async delete(@Param('id', ParseIntPipe) id:number): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }   
}

