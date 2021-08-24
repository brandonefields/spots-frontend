import React from 'react';

const Dog = (props) => {
    return (
    
            <li className="dogs-card">
                <h1>"{props.name}"</h1>
                <p>Breed: {props.breed}</p>
                <p>Color: {props.color}</p>
                <p>Size: {props.size}lbs</p>
                <p>Speed: {props.speed}</p>
                <p>Sensitivity: {props.sensitive}</p>
                <p>Sociability: {props.sociability}</p>
                <p>Level of Aggression: {props.aggressivebehavior}</p>
                <p>Last Updated: {props.updated_at}</p>
                <p>Notes: {props.notes}</p>
            </li>
        
    );
}

export default Dog;
