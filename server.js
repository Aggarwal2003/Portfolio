require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
const cors = require("cors");

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Contact API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
