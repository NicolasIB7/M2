import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Card from "./Card";
import actions, { addMovieFavorite, removeMovieFavorite } from "../redux/actions"



export function Favorites(props){ //traeme todo lo que tenga myfavorites, lo demas no me interesa
console.log(props)

    return (

      <div>
       {props.myFavorites?.map((character, index)=>{
       return <Card
        name={character.name}
        species={character.species}
        gender={character.gender}
        image={character.image}
        id={character.id}
        key={index}
        />
       })} 
</div>
    )
    
  }
//si se cumple que length es mayor a 0 hacé eso, y con los dos puntos indico que se no se mapea nada entonces es null

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}





export default connect(
  mapStateToProps

)(Favorites);



