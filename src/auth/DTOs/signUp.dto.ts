import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsEmail, IsEnum, IsString, IsStrongPassword } from "class-validator"
import { Gender } from "src/user/types/user.types"

export class SignUpDTO {
    @ApiProperty()
    @IsString()
    firstName: string
    
    @ApiProperty()
    @IsString()
    lastName: string
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string
    
    @ApiProperty()
    @IsDate()
    dateOfBirth: Date
    
    @ApiProperty()
    @IsString()
    @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
    password: string
    
    @ApiProperty()
    @IsEnum(Gender)
    @IsString()
    gender: Gender

}