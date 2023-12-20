import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
      },
      name: {
        type: String,
        required: [true, 'Name is required!'],

      },
      avatar: String,
      role: {
        type: String,
        default:'member'
      }

}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)