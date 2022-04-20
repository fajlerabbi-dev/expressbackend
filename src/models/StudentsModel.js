const { default: mongoose } = require('mongoose');

// Students data schema
const DataSchema = mongoose.Schema({
  Name: String,
  Roll: String,
  Class: String,
  Remarks: { 
    type: String, 
    default: 'No Remarks' 
  },
  // Mobile: {
  //   type: String,
  //   validate: {
  //     validator: function (value) {
  //       // if (value.length === 11) {
  //       //   return true
  //       // } else {
  //       //   return false
  //       // }
  //       return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
  //     },
  //     message: 'Invalid bangladeshi phone number'
  //   }
  // },
}, { versionKey: false });

// Students data model
const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;