import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: Number, description: 'User Id'})
    id: number;

    @Column()
    @ApiProperty({ type: String, description: 'User First Name'})
    firstName: string;

    @Column()
    @ApiProperty({ type: String, description: 'User Last Name'})
    lastName: string;

    @Column()
    @ApiProperty({ type: String, description: 'User email address'})
    email: string;

    @Column()
    @ApiProperty({ type: String, description: 'User cellphone number'})
    cellphoneNumber: number;

}