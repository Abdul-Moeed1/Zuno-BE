import { Injectable } from "@nestjs/common";
import { SignUpDTO } from "./DTOs/signUp.dto";

@Injectable()
export class AuthService {
    Signup = async (body : SignUpDTO) => {

    }
}