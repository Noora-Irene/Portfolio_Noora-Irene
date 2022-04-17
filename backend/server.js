require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const exp = express();

const indexRoutes = require('./routes/index.routes');
/*const corsOption = {
   origin: 'http://localhost:8081/'
};*/

const PORT = process.env.PORT;

//exp.use(cors(corsOption));
exp.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
   next();
});

exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({ extended: false }));
exp.use(indexRoutes);

mongoose
   .connect(
      process.env.DB_URI,
      {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })
   .then(() => {
      exp.listen(PORT, () => {
         console.log(`Server listening on port ${PORT}`);
      })
   })
   .catch(err => {
      console.log(err);
   });