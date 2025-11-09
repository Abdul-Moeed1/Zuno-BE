import { Injectable } from "@nestjs/common";
import { SignUpDTO } from "./DTOs/signUp.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/models/user.model";
import { LogInDTO } from "./DTOs/logIn.dto";
import JWT from "jsonwebtoken"

@Injectable()
export class AuthService {
    private readonly JwtSecret: string;
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>
    ) { this.JwtSecret = process.env.JWT_SECRET_KEY as string }
    Signup = async (body: SignUpDTO) => {
        const user = new this.UserModel(body)
        const response = await user.save()
        return response
    }

    Login = async (body: LogInDTO) => {
        const { email, password } = body;
        const user = await this.UserModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                const token = await JWT.sign({ id: user._id, email: email }, this.JwtSecret)
                return token
            } else {
                return "Wrong Credentials"
            }
        } else {
            return "No User Found"
        }
    }
}