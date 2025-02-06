const getState = ({ getStore, getActions, setStore }) => {// setStore actualiza datos obtenidos de la API
	return {
		store: {
			characters: [],  // Lista vacía para personajes
			favourites: [],  //lisa vacia apra agregar personajes favoritos
			planets: [],
			vehicles: [],
			one_character: null,
			one_planet: null,
			one_vehicle: null,
		},
		actions: {
			loadCharacters: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people'); // Llamo a la API
					const data = await response.json();
					setStore({ characters: data.results }); // Guardo los personajes en el store
				} catch (error) {
					console.error("Error loading characters:", error);
				}
			},

			getCharacter: async (id) => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people/' + id);
					const data = await response.json();
					setStore({ one_character: data.result.properties });
				} catch (error) {
					console.error("Error loading character:", error);
				}
			},


			getVehicle: async (id) => {
				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles/' + id); // Llamo a la API
					const data = await response.json();
					setStore({ one_vehicle: data.result.properties }); // Guardo  en el store
				} catch (error) {
					console.error("Error loading vehicle:", error);
				}
			},

			getPlanet: async (id) => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets/' + id); // Llamo a la API
					const data = await response.json();
					setStore({ one_planet: data.result.properties }); // Guardo en el store
				} catch (error) {
					console.error("Error loading planet:", error);
				}



			},

			setFavourites: (favourite) => {
				const store = getStore();
				if (!store.favourites.includes(favourite)) {//si esta en favoritos ya agregado no lo puedo agregar nuevamente
					setStore({ favourites: [...store.favourites, favourite] });
				}
			},


			loadPlanets: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets'); // Llamo a la API
					const data = await response.json();
					setStore({ planets: data.results }); // Guardo los personajes en el store
				} catch (error) {
					console.error("Error loading planets:", error);
				}
			},


			setPlanets: (favourite) => {
				const store = getStore();
				setStore({ planets: [...store.planets, favourite] });
			},



			loadVehicles: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles'); // Llamo a la API
					const data = await response.json();
					setStore({ vehicles: data.results }); // Guardo los personajes en el store
				} catch (error) {
					console.error("Error loading vehicles:", error);
				}
			},

			setVehicles: (favourite) => {
				const store = getStore()
				setStore({ vehicles: [...store.vehicles, vehicle] });//mismo que arriba

			},

			removeFavourite: (favourite) => {
				const store = getStore();
				const updatedFavourites = store.favourites.filter((item) => item !== favourite);//creo nueva lista con elemento eliminado
				setStore({ favourites: updatedFavourites }); //actualuzacion del contexto global
			},

		}
	};
};

export default getState;