const Contact = require("../models/Contact");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send Email (Resend API - Cloud Safe)
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER], // your inbox
      subject: "New Portfolio Message",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
