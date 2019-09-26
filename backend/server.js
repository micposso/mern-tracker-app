const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

const remoteDB = process.env.REMOTE_DB;
const localDB = process.env.LOCAL_DB;

const db = !remoteDB ? remoteDB : localDB;
console.log(db);

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
.catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("DB connection accepted");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

