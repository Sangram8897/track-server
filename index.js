require('./src/models/User')
const express = require("express");
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes=require('./src/routes/authRoutes')


const mongoURI= 'mongodb+srv://admin:Sangram@8897@cluster0-paves.mongodb.net/test?retryWrites=true&w=majority'
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Database Connected Successfully!!!"))
  .catch(err => console.log("Error while connecting to the database =>  " + err));

express()
.use(bodyParser.json())
.use(authRoutes)
  .get('/', (req, res) => res.send('Hii there'))
  .listen(PORT, () => console.log(`Listening on a ${PORT}`));