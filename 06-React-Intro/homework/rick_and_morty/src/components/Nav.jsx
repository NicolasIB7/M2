import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from "./nav.module.css"

function Nav({onSearch}) {
  return (
  <div className={style.nav}>
    <nav >
      <SearchBar onSearch={onSearch}></SearchBar>
    </nav>
  </div>
  );
};

export default Nav;