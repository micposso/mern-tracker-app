import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExercisesList from "./components/ExercisesList";
import UpdateExercises from "./components/UpdateExercises";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h1>Landing page</h1>
    <Router>
      <NavBar />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/update/:id" component={UpdateExercises} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
    </div>
  );
}

export default App;
