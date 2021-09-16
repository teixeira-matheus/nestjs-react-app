import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'User First Name'})
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'User Last Name'})
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'User E-mail'})
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'User cellphone number'})
  cellphoneNumber: number;
}