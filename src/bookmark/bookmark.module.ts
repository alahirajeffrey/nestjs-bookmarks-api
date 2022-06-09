import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkEntity } from 'src/entities/bookmark.entity';
import { UserEntity } from 'src/entities/user.entity';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, BookmarkEntity])],
    providers:[BookmarkService],
    controllers:[BookmarkController]
})
export class BookmarkModule {}
