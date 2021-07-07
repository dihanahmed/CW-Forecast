const express = require("express");
const donationController = require("./Controllers/DonationController/DonatonController");
const validator = require("./Middlewares/Validator");

const route = express.Router();


route.post('/donate',validator.validateData,donationController.donate)



module.exports = route;


