const express  = require('express');
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Nikhilisagoodb$oy';

//Create a user using POST "/api/auth/createuser". No login required
router.post("/createuser", [
    body('name', 'Enter valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
] , async(req,res) => {
    // If there are errors, return Bad request  and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// Check whether the user with this email exists already

try {

let user = await User.findOne({email: req.body.email})
if(user){
    return res.status(400).json({ error: "Sorry a user with this email already exists"})
}

const salt = await bcrypt.genSalt(10);
secPass = await bcrypt.hash(req.body.password, salt);
// Create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      const data = {
        user: {
            id: user.id
        }
      }
      const auth_Token = jwt.sign(data, JWT_SECRET);
    res.json({auth_Token})
} catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
}
})

module.exports = router;