import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookmarkEntity } from "src/entities/bookmark.entity";
import { UserEntity } from "src/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy/index";


@Module({imports:[JwtModule.register({}),
    TypeOrmModule.forFeature([UserEntity, BookmarkEntity])],
    controllers:[AuthController],
    providers:[AuthService, JwtStrategy]
})
export class AuthModule{}