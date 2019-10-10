import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
require("dotenv").config();
const apiURL = process.env.REACT_APP_DEV_API_URL;

const Exercise = props => {
  const { username, description, duration, date } = props.exercise;

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={`/update/${props.exercise._id}`}>Edit</Link> | 
        <button onClick={() => { props.deleteExercice( props.exercise._id) }}>
          Delete
        </button>
      </td>
    </tr>
  );
};

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercice = this.deleteExercice.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get(`${apiURL}/exercises`).then(res => {
      if (res.data) {
        this.setState({
          exercises: res.data
        })
      }
    });
  }

  deleteExercice(id) {
    axios.delete(`${apiURL}/exercises/${id}`)
      .then(res => console.log('delete function', res.data));

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(current => {
      return (
        <Exercise
          exercise={current}
          deleteExercice={this.deleteExercice}
          key={current._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
