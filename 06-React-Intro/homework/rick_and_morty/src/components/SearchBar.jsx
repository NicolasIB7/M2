import React from 'react';
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div className={style.search}>
         <input className={style.input} type='search' />
         <button className={style.botonSearch} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
