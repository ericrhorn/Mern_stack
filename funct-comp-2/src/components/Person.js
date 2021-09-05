import React, { useState } from 'react';

const Person = (props) => {
    const [age, setAge] = useState(props.currentAge);
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={ ()=> setAge (age + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>

    )

}

export default Person;