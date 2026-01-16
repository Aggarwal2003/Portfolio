const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Skipping email send (debug mode)");


    res.status(201).json({
      message: "Message sent successfully",
      data: newContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
