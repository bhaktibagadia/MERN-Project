const User = require('../models/user-model');

const bcrypt=require("bcryptjs");

const { use } = require('../router/auth-router');

const home =async (req, res)=>{
    try{
        res.status(200).send("Home using controllers");
    } catch(error){
        console.log(error)
    }
};
const register=async(req, res)=>{
    try{
        // console.log(req.body);
        const {username, email, phone, password}=req.body;

        const userExist = await User.findOne({email});
        console.log(userExist)
        if (userExist){
            return res.status(400).json({message:'email already exists'});
        }

        // hash the password
        // const saltRound=10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({username, email, phone, password});
        console.log(userCreated)
        res.status(201).json({msg: "registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(),});  
    }
    catch(error){
        // res.status(500).json("page not found")
        next(error);
    }
};

// user login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Compare passwords
        const isMatch = await userExist.comparePassword(password);

        if (isMatch) {
            const token = await userExist.generateToken();
            res.status(200).json({ msg: "login successful", token, userId: userExist._id.toString() });
        } else {
            res.status(400).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// to send user data

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from route ${error}`);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports={home, register, login, user};