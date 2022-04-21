const jwt = require('jsonwebtoken');

// Create JWT Token

module.exports = (req, res) => {
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: {
      Name: "Fajle",
      City: "Dhaka",
      admin: true
    }
  }
  let Token = jwt.sign(Payload, "SecretKey123")

  res.send(Token);
}