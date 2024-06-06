const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Nikhilisagoodb$oy';

const fetchuser = (req, res, next) => {
    // Get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    console.log(token);
    console.log(JWT_SECRET);    
    try{
        const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
    } catch(error) {
        return res.status(401).send({ error: error.message });
    }
}

module.exports = fetchuser;