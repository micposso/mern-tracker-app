const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
=======
const remoteDB = process.env.REMOTE_DB;
const localDB = process.env.LOCAL_DB;

const db = !remoteDB ? remoteDB : localDB;
console.log(db);

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
.catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});
>>>>>>> b2b2a13d4fb3508dbea4deea3a6ec42310825b5f
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
