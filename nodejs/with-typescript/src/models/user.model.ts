import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: String;
}

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema); //funciones genericas
