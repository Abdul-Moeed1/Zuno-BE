import { Prop, Schema } from "@nestjs/mongoose";
import { type DateOfBirth, Gender } from "../types/user.types";

@Schema()
export class User {
    @Prop({ type: String, required: true })
    firstName: string

    @Prop({ type: String, required: true })
    lastName: string

    @Prop({ type: String, required: true })
    email: string

    @Prop({ required: true })
    dateOfBirth: DateOfBirth

    @Prop({ type: String, required: true })
    password: string

    @Prop({ enum: Gender, type: String, required: true })
    gender: Gender
}