import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDTO } from "./DTOs/signUp.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }
    @Post()
    async Signup(@Body() Body: SignUpDTO) {
        return this.AuthService.Signup(Body)
    }

}