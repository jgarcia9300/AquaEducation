import Button from "../../../components/Button/Button"
import "./ProblemaContaminacion.css"

const ProblemaContaminacion = () => {
  return (
    <main className="problema-contaminacion">
      <header className="problema-contaminacion__header">
        <h1 className="problema-contaminacion__title">CONTAMINACIÓN DEL AGUA</h1>
      </header>
      <section className="problema-contaminacion__section">
        <p>Contenido de la contaminacion</p>
        <Button text="Exploremos el problema" />
      </section>
    </main>
  )
}

export default ProblemaContaminacion
