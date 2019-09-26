import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="li"><Link to ="/">ExerciseTracker</Link></ul>
        <ul className="li"><Link to ="/create">Create</Link></ul>
        <ul className="li"><Link to ="/user">User</Link></ul>
        <ul className="li"><Link to ="/update/:id">Update</Link></ul>
      </nav>
    );
  }
  
  export default NavBar;