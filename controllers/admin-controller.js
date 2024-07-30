const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const Additional = require('../models/additional-model');

const getAllUsers = async(req, res)=>{
    try {
        const users = await User.find({}, {password : 0});
        console.log(users);
        if (!users || users.length===0){
            return res.status(404).json({message : "No Users Found."})
        }
        return res.status(200).json(users);
    } catch (error) {
       next(error) ;
    }
}


const getUserById=async(req, res)=>{
try {
    const id = req.params.id;
    const data = await User.findOne({_id: id}, {password:0});
    return res.status(200).json(data);
} catch (error) {
    next(error)
}
}

const deleteUserById=async(req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({message: "User deleted successfully."})
    } catch (error) {
        next(error)
    }
    }

const getAllContacts=async(req, res)=>{
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length === 0){
            return res.status(404).json({message: "No Contacts Found."});
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error);
    }
}

const getAllAdditionalData=async(req, res)=>{
try {
    const additionalData = await Additional.find();
    if(!additionalData || additionalData.length === 0){
        return res.status(404).json({message : "No data found."});
    }
    return res.status(200).json(additionalData);
} catch (error) {
   next(error); 
}
}

const deleteDatabyId=async(req, res)=>{
    try {
        const id = req.params.id;
        await Additional.deleteOne({_id: id});
        return res.status(200).json({message: "Data deleted successfully."})
    } catch (error) {
        next(error)
    }
    }

    const deleteContactbyId=async(req, res)=>{
        try {
            const id = req.params.id;
            await Contact.deleteOne({_id: id});
            return res.status(200).json({message: "Contact deleted successfully."})
        } catch (error) {
            next(error)
        }
        }

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById, getAllAdditionalData, deleteDatabyId, deleteContactbyId};