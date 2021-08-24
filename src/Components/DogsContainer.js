import React from 'react';
import Dog from './Dog';

const DogsContainer = ({ dogs }) => {

    const showDogs = () => {
        return dogs.map(dog => <Dog key={dog.id} {...dog} />)
    }

    return (
        <ul className="dogs-list">
           {showDogs()}
        </ul>
    )
}

export default DogsContainer;
