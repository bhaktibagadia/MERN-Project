const Service = require('../models/service-model');

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(404).json({ msg: "No services found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.error(`services: ${error}`);
  }
}

module.exports = services;
