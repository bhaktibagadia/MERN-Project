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
