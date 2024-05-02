import { useState, useEffect} from 'react';
import Loading from '../Loading/Loading';
import axios from 'axios';
import './Card.css';
import shinyIcon from '../../assets/shiny.svg';
import arrow from '../../assets/arrow.svg';
import pokeballIcon from '../../assets/pokeball-icon.png';


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

const Card = () => {
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);
    const [pokemonCount, setPokemonCount] = useState(151);
    const [switchForms, setSwitchForms] = useState<boolean[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        return () => {
            // Clear fetched Pokémon data when component unmounts
            setPokemonData([]);
            setPokemonDetails([]);
        };
    }, []);
    

    useEffect(() => {
        fetchPokemonData();
    }, [pokemonCount]); 

    useEffect(() => {
        getPokemonDetails();
    }, [pokemonData]); 

    const fetchPokemonData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonCount}`);
            setPokemonData(response.data.results);
            setSwitchForms(Array(pokemonCount).fill(false));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            setLoading(false);
        }
    };

    const getPokemonDetails = async () => {
        try {
            setLoading(true);
            const detailsPromises = pokemonData.map((pokemon: any) => axios.get(pokemon.url));
            const detailsData = await Promise.all(detailsPromises);
            setPokemonDetails(detailsData.map(response => response.data));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Pokémon details:", error);
            setLoading(false);
        }
    };
    
    const switchPokemonForm = (index: number) => {
        setSwitchForms(prevForms => {
            const newForms = [...prevForms];
            newForms[index] = !newForms[index];
            return newForms;
        });
    };

    const loadMorePokemon = () => {
        setPokemonCount(prevCount => prevCount + 100); 
    };

    const typeIcons: { [key: string]: string } = {
        bug: bugIcon,
        dark: darkIcon,
        dragon: dragonIcon,
        electric: electricIcon,
        fairy: fairyIcon,
        fighting: fightingIcon,
        fire: fireIcon,
        flying: flyingIcon,
        ghost: ghostIcon,
        ground: groundIcon,
        ice: iceIcon,
        normal: normalIcon,
        psychic: psychicIcon,
        rock: rockIcon,
        water: waterIcon,
        poison: poisonIcon, 
        grass: grassIcon, 
        steel: steelIcon,
    };

    return (
        <div className="card-grid-container">
            {loading ? (
                <Loading/>
            ) : (
                pokemonDetails.map((pokemon: any, index: number) => (
                    <div className="card" key={index}>
                        <div className="form">
                            <img className="form-icon" src={switchForms[index] ? shinyIcon : pokeballIcon} alt="Base Form" />
                            <img onClick={() => switchPokemonForm(index)} className='switch' src={arrow} alt="" />
                        </div>
                        <div className="pokemon">
                            <p className="name">{pokemon.name}</p>
                            <img
                                className="pokemon-image"
                                src={
                                    switchForms[index]
                                        ? `/PokeBaseForm/sprites/sprites/pokemon/other/home/shiny/${pokemon.id}.png`
                                        : `/PokeBaseForm/sprites/sprites/pokemon/other/home/${pokemon.id}.png`
                                }
                                alt="Pokemon"
                            />
                            <div className="types">
                                <div className="types-imgs">
                                    
                                    {pokemon.types.map((type: any, typeIndex: number) => (
                                        <img className="type" key={typeIndex} src={typeIcons[type.type.name]} alt={type.type.name} />
                                    ))}
                                </div>
                                <div className="type-container">
                                   
                                    {pokemon.types.map((type: any, typeIndex: number) => (
                                        <p className="type-text" key={typeIndex}>{type.type.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
           {!loading && <button className={`see-more`} onClick={loadMorePokemon}>See more</button>}
        </div>
    );
};

export default Card;
