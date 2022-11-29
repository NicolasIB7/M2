import Card from './Card';
import React from 'react';
import data from "../data";

export default function Cards(props) {
   const { characters } = props;
   return( 
   
   <div>
      {characters.map(character =><Card 
      name={character.name}
      species={character.species}
      gender={character.gender}
      img={character.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      
      />)}




   </div>)
}


