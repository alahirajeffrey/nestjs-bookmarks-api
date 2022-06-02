import { identity } from "rxjs";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
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

    @OneToMany(()=> BookmarkEntity, (book : BookmarkEntity)=>
        book.id)
    bookmarkId : BookmarkEntity

}