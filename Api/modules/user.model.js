import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required:[true,"Please provide a valid Username"],
        unique: [true, 'User already exists'],
    },
    email: {
        type : String,
        required:[true,"Please provide a valid Username"],
        unique: [true, 'User already exists'],
    },
    password: {
        type : String,
        required:[true,"Please provide a valid Username"],
        
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);


export default User;