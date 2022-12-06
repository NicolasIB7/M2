import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import style from "./Card.module.css"
import actions, { addMovieFavorite, removeMovieFavorite } from "../redux/actions"

export default function Card(props) {
   const [isFav,setIsFav]=  useState(false)
   const handleFavorite=(id)=>{
      if (isFav===true){
         setIsFav(false);
         this.props.addMovieFavorite(id);}
      if (isFav===false){
         setIsFav(true);
         this.props.removeMovieFavorite(id)
      }
   }
   return (
      <div className={style.div}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

         <div className={style.divBoton}>
            <button className={style.button} onClick={()=>props.onClose(props.id)}>X</button>
         </div>
         <div className={style.imgNombre}>
            <img  src={props.image} alt="" className={style.imagen} />
            <Link to={`/detail/${props.id}`}>
            <h3 className={style.name}>{props.name}</h3>
            </Link>
         </div>
      <div className={style.divGenero}>  
         <h3 className={style.gender}>{props.gender}</h3>
         <h3 className={style.species}>{props.species}</h3>
      </div>    
         
      </div>
   );
}

function mapStateToProps(state) {
   return {
     movies: state.myFavorites
   };
 }
 
 function mapDispatchToProps(dispatch) {   //paquete de funciones que hacen dispatch
   return {
     removeMovieFavorite: (id) => {dispatch(removeMovieFavorite(id))},
   addMovieFavorite:(id)=>{dispatch(addMovieFavorite(id))}
 }}
 
 
 


