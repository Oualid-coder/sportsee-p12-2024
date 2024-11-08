// src/components/Sidebar.js
import React from 'react';
import { FaRunning, FaSwimmer, FaBiking, FaDumbbell, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><FaRunning /></li>
        <li><FaSwimmer /></li>
        <li><FaBiking /></li>
        <li><FaDumbbell /></li>
        <li><FaUser /></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
