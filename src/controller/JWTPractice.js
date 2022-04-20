const jwt = require('jsonwebtoken');

// Create Token
exports.CreateToken = (req, res) => {
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: {
      Name: "fajle rabbi",
      City: "Dhaka",
      admin: true
    }
  }
  let Token = jwt.sign(Payload, "SecretKey123")

  res.send(Token);
}


// Decode Token
exports.DecodeToken = (req, res) => {
  let Token = req.headers['token-key'];

  jwt.verify(Token, "SecretKey123", (err, decoded) => {
    if (err) {
      res.status(401).json({ Status: 'Invalid Token', Data: err });
    } else {
      res.status(200).json({ Status: 'Success', Data: decoded });

    }
  });
}