import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
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
}