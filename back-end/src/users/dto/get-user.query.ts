import { ApiProperty } from '@nestjs/swagger';
import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class GetUserQuery {

    @IsOptional()
    @Transform(i => Number(i))
    @IsInt({ each: true })
    @ApiProperty({ type: Number, description: 'Search by user Id', required: false})
    id?: number;

    @IsOptional()
    @IsString()
    @ApiProperty({ type: String, description: 'Search by user first name', required: false})
    firstName?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ type: Number, description: 'Search by user last name', required: false})
    lastName?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ type: Number, description: 'Search by user email', required: false})
    email?: string;

    @IsOptional()
    @Transform(i => Number(i))
    @IsInt({ each: true })
    @ApiProperty({ type: Number, description: 'Search by user cellphone Number', required: false})
    cellphoneNumber?: number;
    
}
