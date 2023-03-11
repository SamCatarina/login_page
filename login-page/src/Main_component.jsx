import { useState } from 'react'
import './main_component.css'

function Main_component() {

  function Element(props){

    return (

      <div className="component">
        {props.title}
      </div>
    )
  }

  return (
    <div className='main-component'>
      <div className="elements">

      <div className="login">L O G I N</div>
      <div className="form">
        <Element title="user"/>
        <Element title="password"/>
      </div>

      <div className="button">Login</div>
      <div className="message">Doesn't have a account? click here</div>

      </div>
      
    </div>
  )
}

export default Main_component
