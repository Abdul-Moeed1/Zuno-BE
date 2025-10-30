import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.model";

@Module({
    controllers: [UserController],
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    exports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [UserService],
})
export class UserModule { }