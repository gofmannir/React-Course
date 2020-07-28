import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.handler}>I'm {props.name} And I'm {props.age} years old.</p>
            <input type='text' value={props.name} onChange={props.nameChangeHandler} />
        </div>
        
    )
}

export default Person