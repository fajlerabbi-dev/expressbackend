exports.Hello1 = (req, res) => {
  res.status(200).json({
    status: "OK",
    data: "This is my first rest API Hello1 Get"
  })
};

exports.Hello2 = (req, res) => {
  res.status(201).json({
    status: "OK",
    data: "This is my first rest API Hello2 Post"
  })
};