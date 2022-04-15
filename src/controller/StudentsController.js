const StudentsModel = require('../models/StudentsModel');

// C = Create Student
exports.InsertStudent = (req, res) => {
  const reqBody = req.body;
  StudentsModel.create(reqBody, (error, data) => {
    if (!error) {
      res.status(201).json({ Status: 'Data created', data: data });
    } else {
      res.status(400).json({ Status: 'Data Creation Fail', data: error });
    }
  });
}

// R = Read Student
exports.ReadStudent = (req, res) => {
  const query = {};
  const projection = "Name Roll Class Remarks";
  StudentsModel.find(query, projection, (error, data) => {
    if (!error) {
      res.status(200).json({ Status: 'Data Found', data: data });
    } else {
      res.status(400).json({ Status: 'Data Read Fail', data: error });
    }
  })
}

// U = Update student

exports.UpdateStudent = (req, res) => {
  const reqBody = req.body;
  const id = req.params.id;
  const query = { _id: id };
  StudentsModel.updateOne(query, reqBody, (error, data) => {
    if (!error) {
      res.status(200).json({ Status: 'Update Successful', data: data });
    } else {
      res.status(400).json({ Status: 'Data Update Fail', data: error });
    }
  });
}


// D = Delete student

exports.DeleteStudent = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  StudentsModel.remove(query, (error, data) => {
    if (!error) {
      res.status(200).json({ Status: 'Delete Sucess', data: data });
    } else {
      rew.status(400).json({ Status: 'Data Delete Fail', data: error });
    }
  })
}