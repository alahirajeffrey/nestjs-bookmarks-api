import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController{
    constructor (private authService: AuthService) {}

    @Post('register')
    async register(
        @Body() dto: AuthDto 
    ){
        return await this.authService.register(dto)
    }

    @Get('login')
    login(
        @Body() dto: LoginDto
    ){
        return this.authService.login(dto)
    }
}