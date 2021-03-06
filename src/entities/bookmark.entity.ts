import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('bookmarks')
export class BookmarkEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @Column()
    title: string

    @Column()
    link: string

    @Column()
    description?: string

    @OneToOne(()=>UserEntity, (user)=>user.id)
    user: UserEntity

}