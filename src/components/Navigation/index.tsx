import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div className="navigationContainer">
      <h2>Todo App</h2>
        <div className="navigationButtonsContainer">
        <NavLink to="/" className="button">All Todos</NavLink>
        <NavLink to="/deleted" className="button">Deleted Todos</NavLink>
      </div>
    </div>
  )
}

export default Navigation
