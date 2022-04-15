const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');


app.listen(process.env.RUNNING_PORT, function () {
  console.log(`Success running port come from dotenv is: ${process.env.RUNNING_PORT}`);
});