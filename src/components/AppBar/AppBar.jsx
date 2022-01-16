import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <nav>
        <div>
          <Link>
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
              alt="logo"
              width="60"
              height="60"
            />
          </Link>
          <ul>
            <li>
              <Link path="/">Todos</Link>
            </li>
            <li>
              <Link path="/about">About List</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AppBar;
