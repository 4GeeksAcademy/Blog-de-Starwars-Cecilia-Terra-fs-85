const getState = ({ getStore, getActions, setStore }) => {// setStore actualiza datos obtenidos de la API
	return {
		store: {
			characters: [],  // Lista vacía para personajes
			favourites: [],  //lisa vacia apra agregar personajes favoritos
			planets: [],
			vehicles: [],
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

			setFavourites: (favourite) => {
				const store = getStore()
				console.log(favourite);
				console.log(store.favourites);



				setStore({ favourites: [...store.favourites, favourite] });

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
			setPlanets: (planet) => {
				const store = getStore()
				setStore({ planets: [...store.planets, planet] });

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

			setVehicles: (vehicle) => {
				const store = getStore()
				setStore({ vehicles: [...store.vehicles, vehicle] });

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