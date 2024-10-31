import "./Home.css";
import Button from "../../components/Button/Button";
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
            La crisis ambiental del agua se manifiesta a través de tres
            problemas interrelacionados: la contaminación, la escasez y la
            acidificación de los océanos. La contaminación del agua, provocada
            por desechos industriales y agrícolas, compromete la salud de los
            ecosistemas y de las personas. A su vez, la creciente escasez de
            recursos hídricos, intensificada por el cambio climático y la mala
            gestión, pone en riesgo el acceso al agua potable. Finalmente, la
            acidificación de los océanos, resultado de la absorción de dióxido
            de carbono, afecta gravemente la vida marina. Abordar estos desafíos
            es fundamental para garantizar un futuro sostenible para nuestro
            planeta.
          </p>
        </article>
        <Button
          text="Conozcamos más"
          href="/problemas-ambientales/contaminacion-del-agua"
          fontSize="18px"
        />
      </section>
    </main>
  );
};

export default Home;
