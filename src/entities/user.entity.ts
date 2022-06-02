import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: string
    
    @Column()
    email: string

    @Column()
    passwordHash: string

    @Column()
    username: string
}