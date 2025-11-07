import { Injectable } from "@nestjs/common";
import { SignUpDTO } from "./DTOs/signUp.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/models/user.model";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }
    Signup = async (body: SignUpDTO) => {
        const student = new this.UserModel(body)
        const response = await student.save()
        return response
    }

    Login = async () => {
        
    }
}