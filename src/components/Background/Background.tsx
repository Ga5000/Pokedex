import pokeball from '../../assets/pokeball.png';

const Background = () => {
  const pokeballImages = [];

  for (let i = 0; i < 4; i++) {
    pokeballImages.push(<img className={`pokeball-bc pokeball-corner-${i}`} key={i} src={pokeball} alt="" />);
  }

  return <>{pokeballImages}</>;
};

export default Background;
