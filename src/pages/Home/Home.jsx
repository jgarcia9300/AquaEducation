import './Home.css'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <main className="home">
      <video className="home__video" autoPlay muted loop>
        <source src="/src/static/videos/video_home.mp4" type="video/mp4" />
      </video>
      <section className="home__section">
        <h1 className="home__title">EL AGUA Y EL MEDIO AMBIENTE</h1>
        <article className="home__article">
          <p className="home__text">
            El agua es la fuente de energía del medio ambiente. Por eso, es de 
            gran importancia que las personas tengan acceso a ella.
          </p>
        </article>
        <Button text="Veamos los problemas medioambientales" />
      </section>
    </main>
  )
}

export default Home
