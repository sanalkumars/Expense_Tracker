import mongoose, { Document, Schema } from "mongoose";

// Defining the interface for the User schema
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profilePic?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
// Creating the schema
const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // }
  },
  { timestamps: true }
);

// Creating the model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
