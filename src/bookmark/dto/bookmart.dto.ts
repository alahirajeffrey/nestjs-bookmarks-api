import { IsNotEmpty, IsOptional } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateBookmarkDto{

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    link: string

    @IsNotEmpty()
    @IsOptional()
    description: string

    
}