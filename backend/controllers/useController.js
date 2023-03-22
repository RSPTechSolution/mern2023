import User from "../models/userModel.js";

export const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message: error.message });    
    }
}

export const getuserById = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async (req,res) => {
    const user = new User(req.body);
    try{
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req,res) => {
    try{
        const updateuser = await User.updateOne({_id:req.params.id}, {$set: req.body});
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async (req,res) => {
    try{
        const deletedUser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deletedUser);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}