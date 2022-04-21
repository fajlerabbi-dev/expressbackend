const express = require('express');
const { Hello1, Hello2 } = require('../controller/HelloController');
const { CreateToken, DecodeToken } = require('../controller/JWTPractice');
const { InsertStudent, ReadStudent, UpdateStudent, DeleteStudent } = require('../controller/StudentsController');
const TokenIssue = require('../controller/TokenIssue');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');
const router = express.Router();

// This is my first routes
router.get('/hello-get', Hello1);
router.post('/hello-post', Hello2);

// Mongoose routes
router.post('/TokenIssue', TokenIssue);
router.post('/InsertStudent', TokenVerifyMiddleware, InsertStudent);
router.post('/ReadStudent', TokenVerifyMiddleware, ReadStudent);
router.post('/UpdateStudent/:id', TokenVerifyMiddleware, UpdateStudent);
router.get('/DeleteStudent/:id', TokenVerifyMiddleware, DeleteStudent);


// Practice JSON Web Token Routes
router.get('/CreateToken', CreateToken);
router.get('/DecodeToken', DecodeToken);


module.exports = router;