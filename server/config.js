const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

module.exports = transporter;