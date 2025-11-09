import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDTO } from "./DTOs/signUp.dto";
import { LogInDTO } from "./DTOs/logIn.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }
    @Post("signup")
    async Signup(@Body() Body: SignUpDTO) {
        return this.AuthService.Signup(Body)
    }

    @Post("login")
    async login(@Body() body: LogInDTO) {
        return this.AuthService.Login(body)
    }
}