import React from 'react';
import { NavLink } from 'react-router-dom';

const MiddlemanMenu = () => {
  return (
    <div className="text-center">
      <nav className="list-group">
        <h4>Middleman  Dashboard</h4>
        <NavLink
          to="/dashboard/middleman/AllUsersUnderLocation"
          className="list-group-item"
        >
          All Users
        </NavLink>
        <NavLink
          to="/dashboard/middleman/AllOrders"
          className="list-group-item"
        >
         All order
        </NavLink>
        
        
      </nav>
    </div>
  );
}

export default MiddlemanMenu;
