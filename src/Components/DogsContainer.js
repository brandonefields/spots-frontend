import React from 'react';
import Dog from './Dog';

export default function DogsContainer({ dogs }){

    const showDogs = () => {
        return dogs.map(dog => <Dog key={dog.id} {...dog} />)
    }

    return (
        <ul className="dogs-list">
           {showDogs()}
        </ul>
    )
}


