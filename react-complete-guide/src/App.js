import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'

const app = props => {

    const [personsState, setPersons] = useState(
        {
            persons: [
                {name:"Nir", age:"21"}
            ]
        }
    )

    const switchNameHandler = (newName) => {
        setPersons({
            persons: [
                {name: newName, age: "23"}
            ]
        })
    }

    const nameChangedHandler = (event) => {
        setPersons({
            persons: [
                {name: event.target.value, age: "23"}
            ]
        })
    }

        return (
            <div className="App">
                <h1>Hi! Im a react app!</h1>
                <button onClick={switchNameHandler.bind(this, 'NIRR')}>Switch Name</button>

                <Person nameChangeHandler={nameChangedHandler} handler={() => switchNameHandler("N I R")} name={personsState.persons[0].name} age={personsState.persons[0].age} />
            </div>
        );
    
}

export default app;
