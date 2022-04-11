import React from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => (
  <div className="a-nav">
    <nav>
      <ul>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/signin">Sign-in</Link>
        </li>
      </ul>
    </nav>
  </div>
);
