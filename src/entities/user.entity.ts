import { identity } from "rxjs";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { BookmarkEntity } from "./bookmark.entity";

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

    @OneToMany(()=> BookmarkEntity, (bookmark)=>bookmark.id)
    @JoinColumn()
    bookmark: BookmarkEntity[]

}