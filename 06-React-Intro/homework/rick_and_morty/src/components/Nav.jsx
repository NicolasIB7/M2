import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from "./nav.module.css"
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
  <div className={style.nav}>
    <nav >
      <SearchBar onSearch={onSearch}></SearchBar>

      <Link to="/about" >
        <span>About</span>
      </Link>
      <Link to="/home">
        <span>HOME</span>      
      </Link>

      <Link to="/detail">
        <span>Detail</span>
      </Link>

      <Link to="/favorites">
        <span>Favoritos</span>
      </Link>
    </nav>
  </div>
  );
};

export default Nav;

