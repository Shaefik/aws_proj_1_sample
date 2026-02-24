const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://static-frontent-1.s3-website-us-east-1.amazonaws.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form Data Received:");
  console.log(name, email, message);

  res.json({ message: "Form submitted successfully!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});