import ParseOptions from 'eleventy-plugin-toc/src/ParseOptions';
import React from 'react';
import {useState} from "react";


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};
export default function  Form(props) {
  const [input, setInput] = useState({
    username:"",
    password:"",
  })
  
  const [errors, setErrors] = useState({
    username:"",
    password:"",
  });

  const handleInputChange=(e)=>{
    const value=e.target.value;
    const property=e.target.name;
    setInput({...input, [property]: value  //quiero que el nombre de mi propiedad sea igual al valor del input que yo ponga.
  })
  setErrors(validate({
    ...input,
    [property]: value
  }));
}

const handleSubmit=(e)=>{
  e.preventDefault()
  props.login(input)
}
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input className={errors.username && "danger"} type="text" name="username"  onChange={handleInputChange} value={input.username}/>
        {errors.username && (
      <p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label>Password:</label>
        <input  className={errors.password && "danger"} type="password" name="password" value={input.password} onChange={handleInputChange}/>
        {errors.password && (
      <p className="danger">{errors.password}</p>)}
      </div>
      <div>
        <button type="submit" >Submit</button>
      </div>

    </form>
  )
}
