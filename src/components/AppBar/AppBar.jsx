import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <nav>
        <div>
          <Link>
            <img />
          </Link>
          <ul>
            <li>
              <Link path="/">Todos</Link>
            </li>
            <li>
              <Link path="/about">About List</Link>
            </li>
          </ul>
          >
        </div>
      </nav>
    </>
  );
};

export default AppBar;
