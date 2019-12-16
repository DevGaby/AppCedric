import { Contact } from './model/contact';
import { pairs } from 'rxjs';

// Contacts test de base à partir du constructeur

export const CONTACTS: Contact[] = [
	{
		id: 1,
		name: "Dupond",
		surname: "Jean",
        addressNumber: 5,
        address: "rue de la paix",
        cp: 75000,
        town: "paris",
		picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
	},
	{
		id: 2,
		name: "Durant",
		surname: "Baptiste",
        addressNumber: 62,
        address: "rue stalingrad",
        cp: 75001,
        town: "paris",
		picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
	},
	{
		id: 3,
		name: "Malle",
		surname: "Denise",
        addressNumber: 48,
        address: "avenue Foch",
        cp: 92000,
        town: "Nanterre",
		picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
	},
	{
		id: 4,
		name: "Boule",
		surname: "Ginette",
        addressNumber: 112,
        address: "rue de la liberté",
        cp: 93000,
        town: "Roissy",
		picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
	},
	{
		id: 5,
		name: "Laporte",
		surname: "Marc",
        addressNumber: 25,
        address: "villa des perches",
        cp: 78000,
        town: "Poissy",
		picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
	},
	{
		id: 6,
		name: "Tarte",
		surname: "Ma",
        addressNumber: 33,
        address: "boulevard Gambetta",
        cp: 94000,
        town: "Vincennes",
		picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
	},
];