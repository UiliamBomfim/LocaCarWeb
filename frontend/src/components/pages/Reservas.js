
import LinkButton from '../layout/LinkButton'

function Reservas() {
    return(
        <div>
            <h1>Reservas</h1>
            <p>Se a sua reserva foi aprovada, faça a sua locação:</p>
            <LinkButton to="/rentcar" text="Locação"/>
        </div>

    )
}

export default Reservas