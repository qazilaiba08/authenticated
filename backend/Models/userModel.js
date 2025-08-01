import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

userSchema.pre("save",async function (next) {
    if(!this.isModified('password')) {
        return next();
    }
    try {
       const salt = await bcrypt.genSalt(10);
       this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (password) {
    try{
        return await bcrypt.compare(password, this.password);
    }
    catch (error) {
        new Error.status(500).json({ message: "Error comparing password"+ error.message });
    }
}

const User = mongoose.model("User", userSchema);
export default User;