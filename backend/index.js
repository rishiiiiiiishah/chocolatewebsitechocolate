const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 4000;

// ✅ Middleware setup
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb+srv://rishiiiishah:2cdm8YZ5XQv0nfij@cluster0.9qrmj2b.mongodb.net/choco");

// ✅ Define User Model
const Users = mongoose.model('Users', {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
});

// ✅ Default route
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// ✅ User Signup Route
app.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10); // ✅ Hash password

        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({ user: { id: user.id } }, "sercret_choco");

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "Strict"
        }).json({ success: true });

    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// ✅ User Login Route
app.post('/login', async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({ success: false, errors: "User not found" });
        }

        const passMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passMatch) {
            return res.status(400).json({ success: false, errors: "Incorrect password" });
        }

        const token = jwt.sign({ user: { id: user.id } }, "sercret_choco", { expiresIn: '1d' });

        return res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "Strict"
        }).json({ success: true, token });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// ✅ Logout Route
app.get('/logout', (req, res) => {
    res.clearCookie('token', { httpOnly: true, sameSite: "Strict" });
    res.json({ success: true, message: "Logout successful" });
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
