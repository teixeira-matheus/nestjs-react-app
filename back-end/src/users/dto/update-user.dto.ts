import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'User First Name', required: false})
  firstName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'User Last Name', required: false})
  lastName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'User E-mail', required: false})
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ type: Number, description: 'User cellphone number', required: false})
  cellphoneNumber?: number;
}