import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import * as argon from 'argon2' 
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { AuthDto } from "./dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(UserEntity) 
        private readonly userRepo : Repository<UserEntity>, 
        private jwt: JwtService
    ){}

    async signToken(userId: string, email: string):Promise<{access_token: string}>{
        const payload ={
            sub: userId,
            email 
        }

        //create token
        const token = await this.jwt.signAsync(payload, {
            expiresIn:"15m",
            secret: process.env.JWT_SECRET
        }) 

        return { access_token : token }
    }

    async register(dto: AuthDto){

        try{
             //generate password hash
            const hashedPassword = await argon.hash(dto.password)
            
            //save user to database
            const newUser = await this.userRepo.save({
                email: dto.email,
                passwordHash: hashedPassword,
                username: dto.username
            })

            //hide password hash
            delete newUser.passwordHash

            //return saved user
            return (newUser) 

        }catch(error){

            // return if user already exists
            if(error.code== "23505") throw new HttpException("User already exists", HttpStatus.INTERNAL_SERVER_ERROR)

            // return error detail
            throw new HttpException(error.detail, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    async login(dto : LoginDto){
        // check if user exists
        const userExists = await this.userRepo.findOneBy({email:dto.email}) 

        //throw exception if user does not exists
        if(!userExists) throw new HttpException("User does not exists", HttpStatus.INTERNAL_SERVER_ERROR)

        // compare passwords
        const passwordmatches = await argon.verify(userExists.passwordHash, dto.password)

        // throw exception if password is incorrect
        if(!passwordmatches) throw new HttpException("Incorrect password", HttpStatus.UNAUTHORIZED)

        // return token
        return this.signToken(userExists.id, userExists.email)
         
    }
}