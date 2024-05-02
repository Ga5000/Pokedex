import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";
import pokeball from '../../assets/pokeball-icon.png';
import shiny from '../../assets/shiny.svg';
import './PokeInfo.css';

interface PokemonData {
    id: number;
    name: string;
    height: number;
    base_experience: number;
    weight: number;
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
}

interface Props {
    searchedPokemon: string;
}

const PokeInfo: React.FC<Props> = ({ searchedPokemon }) => {
    const [data, setData] = useState<PokemonData | null>(null);
    const [loading, setLoading] = useState(false);
    const [isShiny, setIsShiny] = useState(false); // State to manage the form switch
   
    useEffect(() => {
        async function getPokemonData() {
            setLoading(true);
            try {
                const response = await axios.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            } finally {
                setLoading(false);
            }
        }

        if (searchedPokemon) {
            getPokemonData();
        }
    }, [searchedPokemon]);

    // Function to toggle the form
    const toggleForm = () => {
        setIsShiny(prevState => !prevState);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                data && (
                    <div className="poke-info">
                        <div className="details">
                            <div className="dex-form">
                                <h1>Nº {data.id}</h1>
                                <img className="form" src={isShiny ? shiny : pokeball} alt="" onClick={toggleForm} /> {/* Toggle form on click */}
                            </div>
                            <h2 className="name">{data.name}</h2>
                            <h3> Type: 
                                {data.types.map((type, index) => (
                                    <span key={index}>
                                        {" "+type.type.name}
                                        {index < data.types.length - 1 && " - "}
                                    </span>
                                ))}
                            </h3>
                        </div>
                        <div className="stats">
                            <ul>
                                {data.stats.map((stat, index) => (
                                    <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="forms">
                           
                        </div>
                        <div className="pokemon-img">
                            <img src={
                                isShiny ? 
                                `/PokeBaseForm/sprites/sprites/pokemon/other/home/shiny/${data.id}.png`
                                :
                                `/PokeBaseForm/sprites/sprites/pokemon/other/home/${data.id}.png`
                            } alt="" /> 
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default PokeInfo;
