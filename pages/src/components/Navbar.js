import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  const handleClick = (ll, id) => {
    props.setLang(ll);
    if (id !== 'hindi') {
      document.getElementById('hindi').classList.remove('active');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Apna Samachar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                onClick={() => {
                  console.log('Top Headlines');
                }}
              >
                Top Headlines
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/environment" className="nav-link">
                Environment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/food" className="nav-link">
                Food
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/politics" className="nav-link">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/world" className="nav-link">
                World
              </Link>
            </li>
          </ul>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group btn-group-sm d-flex "
              role="group"
              aria-label="Large button group"
            >
              <button
                id="hindi"
                type="button"
                className="btn btn-outline-primary active"
                onClick={() => handleClick('hi', 'hindi')}
              >
                Hindi(अ)
              </button>
              <button
                id="english"
                type="button"
                className="btn btn-outline-primary"
                onClick={() => handleClick('en', 'english')}
              >
                English(A)
              </button>
              <button
                id="bengali"
                type="button"
                className="btn btn-outline-primary"
                onClick={() => handleClick('bn', 'bengali')}
              >
                Bengali(ক)
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
