import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Detailsvehicles = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store } = useContext(Context); // Entro al contexto global, donde esta toda la informacion
    const vehicles = store.vehicles.find(vehicle => vehicle.uid === id); // entro en store, busco character que sea = a una id

    if (!vehicles) {
        return <p>Vehicle not found</p>; // si character distinto que una id devolver mensaje
    }

    return (
        <div className="d-flex ">
            <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                <h1>{vehicles.name}</h1>
                <p>Details about {vehicles.name} will go here.</p>
            </div>
        </div>
    );
};



export default Detailsvehicles;
