const { default: mongoose } = require('mongoose');

// Students data schema
const DataSchema = mongoose.Schema({
  Name: String,
  Roll: String,
  Class: String,
  Remarks: String
});

// Students data model
const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;