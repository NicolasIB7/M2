import Card from './Card';
import React from 'react';

import style from "./cards.module.css"

export default function Cards({onClose,characters}) {
   return( 

   <div className={style.cards}>
      {characters.map(character =><Card 
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={onClose}
      id={character.id}
      
      />)}




   </div>)
}


