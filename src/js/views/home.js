import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";
import Cardplanets from "../component/Cardplanets";
import Cardvehicles from "../component/Cardvehicles";




const Home = () => {
	const { store } = useContext(Context); // entramos en Home al contexto 
	return (
		<div className="text-start mt-5 row ">
			<div className="text-danger mt-4">
				<h1>Characters</h1>
			</div>
			<div className="row g-3 d-flex">
				<div className="d-flex flex-column ">
					<div className="d-flex overflow-auto mb-5">
						{store.characters.map(character => {
							return (
								<div className="mx-3" key={character.uid} >
									<Card id={character.uid} name={character.name} />
								</div>)
						}
						)

						}


					</div>

					<div className="text-danger mt-4 mb-5">
						<h1>Vehicles</h1>
					</div>
					<div className="d-flex overflow-auto mb-5">
						{store.vehicles.map(vehicle => {
							return (
								<div className="mx-3" key={vehicle.uid} >
									<Cardvehicles id={vehicle.uid} name={vehicle.name} />
								</div>)
						}
						)

						}
					</div>


					<div className="text-danger mt-4 mb-5">
						<h1>Planets</h1>
					</div>
					<div className="d-flex overflow-auto mb-5">
						{store.planets.map(planet => {
							return (
								<div className="mx-3" key={planet.uid} >
									<Cardplanets id={planet.uid} name={planet.name} />
								</div>)
						}
						)

						}
					</div>
				</div>





			</div>
			...</div >
	)
};


export default Home;