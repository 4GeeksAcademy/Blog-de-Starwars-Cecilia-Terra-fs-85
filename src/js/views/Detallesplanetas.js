import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Detailsplanets = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store, actions } = useContext(Context); // Entro al contexto global, donde esta toda la informacion



    useEffect(() => {
        actions.getPlanet(id);
    }, [id])//uso id para que si el usuario cambia de planeta o vehiculo no se vuelva a ejecutar el effec

  

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {store.one_planet && (
                    <>
                        <h1>{store.one_planet.name}</h1>
                        <p>Climate: {store.one_planet.climate}</p>
                        <p>Terrain: {store.one_planet.terrain}</p>
                        <p>Population: {store.one_planet.population}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default Detailsplanets;
