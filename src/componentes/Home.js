import '../css/Home.css'
import ItemListContainer  from './ItemListContainer';

function Home () {
  return (
    <section>
      <section id='home'>
        <div className="home__background"></div>
      </section>
      <section>
        <ItemListContainer  titulo = 'Hola desde react router'/>
      </section>
    </section>
    
  )
}

export default Home;