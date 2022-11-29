import Card from './Card';
import React from 'react';
import data from "../data";
import style from "./cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return( 
   
   <div className={style.cards}>
      {characters.map(character =><Card 
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      
      />)}




   </div>)
}


