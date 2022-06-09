import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { EditUserDto } from "./dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity) 
        private readonly userRepo : Repository<UserEntity>, 
    ){}

    // get user profile
    async userProfie(userId: string) : Promise<Object>{
        const user = await this.userRepo.findOneBy({id: userId})

        //remove password
        delete user.passwordHash
        return user
    }

    // update user
    async updateUser(userId: string, dto: EditUserDto){
        return await this.userRepo.update({id: userId}, dto)
    }

    //delete user
    async deleteUser(userId: string){
        return await this.userRepo.delete(userId)
    }
    
}