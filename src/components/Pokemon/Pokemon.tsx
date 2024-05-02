import types from '../../PokemonTypes'; 
import './Pokemon.css';

const Pokemon = () => {
  return (
    <div className="about-pokemon">
      <div className="pokemon-about-types">
        {types.map((type, index) => (
          <div key={index} className="pokemon-type">
            <img src={type.imagePath} alt={type.name} className="type-image" />
            <div className="type-details">
              <h2>{type.name}</h2>
              <div className="type-info">
                <div className="strong-weak-no-effect">
                  <div>
                    <h3>Strong Against:</h3>
                    <ul>
                      {type.strongAgainst.map((strongType, idx) => (
                        <li key={idx}>{strongType}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Weak Against:</h3>
                    <ul>
                      {type.weakAgainst.map((weakType, idx) => (
                        <li key={idx}>{weakType}</li>
                      ))}
                    </ul>
                  </div>
                  {type.noEffect.length > 0 && (
                    <div>
                      <h3>No Effect Against:</h3>
                      <ul>
                        {type.noEffect.map((noEffectType, idx) => (
                          <li key={idx}>{noEffectType}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
