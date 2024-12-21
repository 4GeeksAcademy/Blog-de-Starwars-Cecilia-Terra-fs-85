import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Details = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store } = useContext(Context); // Entro al contexto global, donde esta toda la informacion
    const character = store.characters.find(char => char.uid === id); // entro en store, busco character que sea = a una id

    if (!character) {
        return <p>Character not found</p>; // si character distinto que una id devolver mensaje
    }

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                <h1>{character.name}</h1>
                <p>Details about {character.name} will go here.</p>
            </div>
        </div>
    );
};



export default Details;
