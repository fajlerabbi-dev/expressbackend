const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
  Name: { type: String },
  Roll: { type: Number },
  Class: { type: String },
  Remarks: { type: String, default: 'No Remarks' },
  Comments: [],
  Dob: {},
  Date: { type: Date, default: Date.now() },
  versionKey: false

});

const DemoStudentModel = mongoose.model('students', DataSchema);

exports.module = DemoStudentModel;