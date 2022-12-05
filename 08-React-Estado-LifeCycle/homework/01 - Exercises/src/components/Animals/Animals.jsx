import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return <div>
      {this.props.animals.map( (a , i) => (
        <div key={i}>
          <h5>{a.name}</h5>
          <img 
            src={a.image}  
            alt={a.name} 
            width={"300px"}
          />
          <br/>
          <span>{a.specie}</span>
        </div>
      ))}
    </div>
  }
}