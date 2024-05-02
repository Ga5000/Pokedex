import './Home.css';
import mew from '/PokeBaseForm/sprites/sprites/pokemon/other/home/151.png';
import pikachu from '/PokeBaseForm/sprites/sprites/pokemon/other/home/25.png'
const Home = () => {
  return (
   <> 

      <div className="home-container">
        <h1>Pokedex</h1>
          <div className="images">
          <img src={mew} alt="" />
          <img className='pokemon' src={pikachu} alt="" />
          </div>
      </div>
   </>
  )
}

export default Home