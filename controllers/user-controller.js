<<<<<<< HEAD
const Contact = require('../models/user-model');

const contactForm = async(req, res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message: "message sent successfully"});
    } catch (error) {
        return res.status(500).json({message:"message not delivered"});
    }
};

module.exports=contactForm;
=======
const Additional = require('../models/additional-model')

const AdditionalForm = async (req, res) => {
    console.log("outside try catch");
    try {
        const response = req.body;
        console.log(req.body)
        
        await Additional.create(response);
        console.log("user controller working");
        return res.status(200).json({message: "Information sent"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "information not sent"});
    }
}

module.exports = AdditionalForm 
>>>>>>> 6ac237344a1f598e38244a546534a1bcc0191989
