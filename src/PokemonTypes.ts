import bugIcon from '/PokeTypes/bug.png';
import darkIcon from '/PokeTypes/dark.svg';
import dragonIcon from '/PokeTypes/dragon.png';
import electricIcon from '/PokeTypes/electric.svg';
import fairyIcon from '/PokeTypes/fairy.svg';
import fightingIcon from '/PokeTypes/fighting.svg';
import fireIcon from '/PokeTypes/fire.png';
import flyingIcon from '/PokeTypes/flying.png';
import ghostIcon from '/PokeTypes/ghost.png';
import grassIcon from '/PokeTypes/grass.png';
import groundIcon from '/PokeTypes/ground.svg';
import iceIcon from '/PokeTypes/ice.svg';
import normalIcon from '/PokeTypes/normal.svg';
import psychicIcon from '/PokeTypes/psychic.svg';
import poisonIcon from '/PokeTypes/poison.svg';
import rockIcon from '/PokeTypes/rock.svg';
import waterIcon from '/PokeTypes/water.svg';
import steelIcon from '/PokeTypes/steel.svg';

interface PokemonType {
    name: string;
    imagePath: string;
    strongAgainst: string[];
    weakAgainst: string[];
    noEffect: string[];
  }
  
  const types: PokemonType[] = [
    {
      name: 'Bug',
      imagePath: bugIcon,
      strongAgainst: ['Grass', 'Psychic', 'Dark'],
      weakAgainst: ['Fire', 'Flying', 'Rock'],
      noEffect: [],
    },
    {
      name: 'Dark',
      imagePath: darkIcon,
      strongAgainst: ['Ghost', 'Psychic'],
      weakAgainst: ['Bug', 'Fairy', 'Fighting'],
      noEffect: [],
    },
    {
      name: 'Dragon',
      imagePath: dragonIcon,
      strongAgainst: ['Dragon'],
      weakAgainst: ['Dragon', 'Fairy', 'Ice'],
      noEffect: [],
    },
    {
      name: 'Electric',
      imagePath: electricIcon,
      strongAgainst: ['Water', 'Flying'],
      weakAgainst: ['Ground'],
      noEffect: [],
    },
    {
      name: 'Fairy',
      imagePath: fairyIcon,
      strongAgainst: ['Dark', 'Dragon', 'Fighting'],
      weakAgainst: ['Poison', 'Steel'],
      noEffect: [],
    },
    {
      name: 'Fighting',
      imagePath: fightingIcon,
      strongAgainst: ['Dark', 'Ice', 'Normal', 'Rock', 'Steel'],
      weakAgainst: ['Fairy', 'Flying', 'Psychic'],
      noEffect: [],
    },
    {
      name: 'Fire',
      imagePath: fireIcon,
      strongAgainst: ['Bug', 'Grass', 'Ice', 'Steel'],
      weakAgainst: ['Ground', 'Rock', 'Water'],
      noEffect: [],
    },
    {
      name: 'Flying',
      imagePath: flyingIcon,
      strongAgainst: ['Bug', 'Fighting', 'Grass'],
      weakAgainst: ['Electric', 'Ice', 'Rock'],
      noEffect: [],
    },
    {
      name: 'Ghost',
      imagePath: ghostIcon,
      strongAgainst: ['Ghost', 'Psychic'],
      weakAgainst: ['Dark', 'Ghost'],
      noEffect: ['Normal'],
    },
    {
      name: 'Grass',
      imagePath: grassIcon,
      strongAgainst: ['Ground', 'Rock', 'Water'],
      weakAgainst: ['Bug', 'Fire', 'Flying', 'Ice', 'Poison'],
      noEffect: [],
    },
    {
      name: 'Ground',
      imagePath: groundIcon,
      strongAgainst: ['Electric', 'Fire', 'Poison', 'Rock', 'Steel'],
      weakAgainst: ['Grass', 'Ice', 'Water'],
      noEffect: ['Flying'],
    },
    {
      name: 'Ice',
      imagePath: iceIcon,
      strongAgainst: ['Dragon', 'Flying', 'Grass', 'Ground'],
      weakAgainst: ['Fire', 'Fighting', 'Rock', 'Steel'],
      noEffect: [],
    },
    {
      name: 'Normal',
      imagePath: normalIcon,
      strongAgainst: [],
      weakAgainst: ['Fighting'],
      noEffect: ['Ghost'],
    },
    {
      name: 'Psychic',
      imagePath: psychicIcon,
      strongAgainst: ['Fighting', 'Poison'],
      weakAgainst: ['Bug', 'Dark', 'Ghost'],
      noEffect: [],
    },
    {
      name: 'Poison',
      imagePath: poisonIcon,
      strongAgainst: ['Fairy', 'Grass'],
      weakAgainst: ['Ground', 'Psychic'],
      noEffect: [],
    },
    {
      name: 'Rock',
      imagePath: rockIcon,
      strongAgainst: ['Bug', 'Fire', 'Flying', 'Ice'],
      weakAgainst: ['Fighting', 'Grass', 'Ground', 'Steel', 'Water'],
      noEffect: [],
    },
    {
      name: 'Water',
      imagePath: waterIcon,
      strongAgainst: ['Fire', 'Ground', 'Rock'],
      weakAgainst: ['Electric', 'Grass'],
      noEffect: [],
   
    },
    {
      name: 'Steel',
      imagePath: steelIcon,
      strongAgainst: ['Fairy', 'Ice', 'Rock'],
      weakAgainst: ['Fire', 'Fighting', 'Ground'],
      noEffect: [],
    }
  ];

  export default types;