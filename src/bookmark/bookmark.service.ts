import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookmarkEntity } from "src/entities/bookmark.entity";
import { Repository } from "typeorm";
import { CreateBookmarkDto } from "./dto";

@Injectable()
export class BookmarkService{
     constructor(
         @InjectRepository(BookmarkEntity)
         private readonly bookmarksrepo : Repository<BookmarkEntity>, 
     ){}

    //get all bookmarks
    async findAllBookmarks(){
        try{
            return await this.bookmarksrepo.find()
        }catch(error){
            throw new BadRequestException(error.message)
        }
    }

    //get single bookmark
    async findSingleBookmarkById(bookmarkId : string){
        try{
            return await this.bookmarksrepo.findOneBy({id: bookmarkId})
        }catch(error){
            throw new BadRequestException(error.message)   
        }
    } 

     //create bookmark
    async createBookmark(dto: CreateBookmarkDto){
        try{
            return await this.bookmarksrepo.create(dto)
        }catch(error){
            throw new BadRequestException(error.message)  
        }
    }

     //delete bookmark
     async deleteBookmark(id: string){
         try{
            return await this.bookmarksrepo.delete(id)
         }catch(error){
            throw new BadRequestException(error.message)
         }
     }

}