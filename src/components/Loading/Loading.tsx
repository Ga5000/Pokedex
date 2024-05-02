import './Loading.css';
import pokeballGif from '../../assets/pokeball-loader.gif';
const Loading = () => {
  return (
    <div className="loading">
    <img src={pokeballGif} alt="Loading..." />
    </div>
  )
}

export default Loading