import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('users')
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: string
    
    @Column({unique:true})
    email: string

    @Column()
    passwordHash: string

    @Column()
    username: string
}