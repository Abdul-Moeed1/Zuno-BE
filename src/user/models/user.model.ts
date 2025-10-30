import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type DateOfBirth, Gender } from "../types/user.types";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User {
    @Prop({ type: String, required: true })
    firstName: string

    @Prop({ type: String, required: true })
    lastName: string

    @Prop({ type: String, required: true, unique: true })
    email: string

    @Prop({ required: true })
    dateOfBirth: Date

    @Prop({ type: String, required: true })
    password: string

    @Prop({ enum: Gender, type: String, required: true })
    gender: Gender

    @Prop({ type: String, required: false })
    profilePic?: String
}

export const UserSchema = SchemaFactory.createForClass(User)