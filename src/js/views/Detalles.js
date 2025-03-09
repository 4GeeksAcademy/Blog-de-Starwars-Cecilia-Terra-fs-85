import React, { useActionState, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Details = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store, actions } = useContext(Context); // Entro al contexto global, donde esta toda la informacion


    //En la SWAPI id es un string,evitar que character sea undefined
    // entro en store, busco character que sea = a una id
    // const planet = store.planets.find(char => String(char.uid) === String(id)) || {};
    // const vehicle = store.vechicles.find(char => String(char.uid) === String(id)) || {};

    useEffect(() => {
        actions.getCharacter(id);
        // actions.getVehicle(id);
        // actions.getPlanet(id);
    }, [id])//uso id para que si el usuario cambia de planeta o vehiculo no se vuelva a ejecutar el effec


    if (!store.one_character) {
        return <p>Loading...</p>;//espera a datos listos, en caso de que no renderizado
    }

    return (
        <div className="d-flex">
            <img
                src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
                alt="Details"
                style={{ width: "400px", height: "150px" }}
            />
            <div>
                {store.one_character && (
                    <>
                        <h1>{store.one_character.name}</h1>
                        <p>Eye Color: {store.one_character.eye_color}</p>
                        <p>Hair Color: {store.one_character.hair_color}</p>
                        <p>Gender: {store.one_character.gender}</p>
                    </>
                )}

                {/* 

              */}
            </div>
        </div>
    );
};

export default Details;