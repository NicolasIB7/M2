import React from 'react';
import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.div}>
         <div className={style.divBoton}>
            <button className={style.button} onClick={()=>props.onClose(props.id)}>X</button>
         </div>
         <div className={style.imgNombre}>
            <img  src={props.image} alt="" className={style.imagen} />
            <h3 className={style.name}>{props.name}</h3>
         </div>
      <div className={style.divGenero}>  
         <h3 className={style.gender}>{props.gender}</h3>
         <h3 className={style.species}>{props.species}</h3>
      </div>    
         
      </div>
   );
}

