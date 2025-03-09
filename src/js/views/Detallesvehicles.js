import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Detailsvehicles = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store, actions } = useContext(Context); // Entro al contexto global, donde esta toda la informacion
    // entro en store, busco character que sea = a una id

    useEffect(() => {

        actions.getVehicle(id);

    }, [id])//uso id para que si el usuario cambia de planeta o vehiculo no se vuelva a ejecutar el effec


    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                {store.one_vehicle && (
                    <>
                        <h1>{store.one_vehicle.name}</h1>
                        <p>Model: {store.one_vehicle.model}</p>
                        <p>Manufacturer: {store.one_vehicle.manufacturer}</p>
                        <p>Cost in Credits: {store.one_vehicle.cost_in_credits}</p>
                    </>
                )}
            </div>
        </div>
    );
};



export default Detailsvehicles;
