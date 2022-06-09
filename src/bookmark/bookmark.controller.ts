import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { BookmarkService } from "./bookmark.service";
import { CreateBookmarkDto } from "./dto";

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController{
    constructor(
        private readonly bookmarkService: BookmarkService
    ){}

    // find all bookmarks
    @HttpCode(HttpStatus.OK)
    @Get()
    async findAllBookmarks(){
        return await this.bookmarkService.findAllBookmarks()
    }

    //find bookmark by id
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    async findById(@Param('id') id){
        return await this.bookmarkService.findSingleBookmarkById(id)
    }

    // create bookmark
    @HttpCode(HttpStatus.CREATED)
    @Post()
    async createBookmark(@Body() dto: CreateBookmarkDto){
        return await this.bookmarkService.createBookmark(dto)
    }

    // delete bookmark
    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    async deleteBookmark(@Param('id') id){
        return await this.bookmarkService.deleteBookmark(id) 
    }
}