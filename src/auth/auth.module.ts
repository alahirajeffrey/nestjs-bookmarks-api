import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookmarkEntity } from "src/entities/bookmark.entity";
import { UserEntity } from "src/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({imports:[TypeOrmModule.forFeature([UserEntity, BookmarkEntity])],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule{}