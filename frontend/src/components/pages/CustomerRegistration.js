import styles from './CustomerRegistration.module.css'
import LinkButton from '../layout/LinkButton'

function CustomerRegistration() {
    return(
        <div className={styles.newrecord_container}>
        <h1>Cadastro de cliente</h1>
        <p>Se você não é nosso cliente, faça o seu cadstro para depois fazer a sua reserva</p>
        <LinkButton to="/newreserva" text="Reserva"/>
        </div>
        
    )
}

export default CustomerRegistration