import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Patch, Req, UseGuards } from "@nestjs/common"; 
import { Request } from "express";
import { GetUser } from "src/auth/decorators";
import { LoginDto } from "src/auth/dto/login.dto";
import { JwtGuard } from "src/auth/guard";
import { UserEntity } from "src/entities/user.entity";
import { EditUserDto } from "./dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UserService } from "./user.service";

@UseGuards(JwtGuard)
@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){}

    @HttpCode(HttpStatus.OK)
    @Get('profile')
    async getProfile(@GetUser() user: UserEntity) : Promise<Object>{
       return await this.userService.userProfie(user.id) 
    }

    @HttpCode(HttpStatus.OK)
    @Patch('update')
    async editUser(
        @GetUser() user: UserEntity, 
        @Body() dto: EditUserDto){

        return await this.userService.updateUser(user.id, dto)
    }

    @HttpCode(HttpStatus.OK)
    @Delete('delete')
    async deleteUser(
        @Body() dto: DeleteUserDto
    ){ return await this.userService.deleteUser(dto.userId)}
}