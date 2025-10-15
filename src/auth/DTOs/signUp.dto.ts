import { IsDate, IsEmail, IsEnum, IsString, IsStrongPassword } from "class-validator"
import { Gender } from "src/user/types/user.types"

export class SignUpDTO {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    @IsEmail()
    email: string

    @IsDate()
    dateOfBirth: Date

    @IsString()
    @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
    password: string

    @IsEnum(Gender)
    @IsString()
    gender: Gender

}