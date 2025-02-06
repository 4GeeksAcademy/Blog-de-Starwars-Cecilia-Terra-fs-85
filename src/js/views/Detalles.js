import React, { useActionState, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Details = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store, actions } = useContext(Context); // Entro al contexto global, donde esta toda la informacion
    const character = store.characters.find(char => String(char.uid) === String(id)) || {};//En la SWAPI id es un string,evitar que character sea undefined
    // entro en store, busco character que sea = a una id
    const planet = store.planets.find(char => String(char.uid) === String(id)) || {};
    const vehicle = store.vechicles.find(char => String(char.uid) === String(id)) || {};

    useEffect(() => {
        actions.getCharacter(id);
        actions.getVehicle(id);
        actions.getPlanet(id);
    }, [id])//uso id para que si el usuario cambia de planeta o vehiculo no se vuelva a ejecutar el effec


    if (!store.one_character && !store.one_vehicle && !store.one_planet) {
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
                {character && (
                    <>
                        <h1>{character.name}</h1>
                        <p>Eye Color: {character.eye_color}</p>
                        <p>Hair Color: {character.hair_color}</p>
                        <p>Gender: {character.gender}</p>
                    </>
                )}

                {vehicle && (
                    <>
                        <h1>{vehicle.name}</h1>
                        <p>Model: {vehicle.model}</p>
                        <p>Manufacturer: {vehicle.manufacturer}</p>
                        <p>Cost in Credits: {vehicle.cost_in_credits}</p>
                    </>
                )}

                {planet && (
                    <>
                        <h1>{planet.name}</h1>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Population: {planet.population}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Details;