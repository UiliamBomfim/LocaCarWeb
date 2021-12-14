import {useNavigate} from 'react-router-dom'
import styles from './CustomerRegistration.module.css'
import CadClientForm from '../cadastro/CadClientForm'
import LinkButton from '../layout/LinkButton'

function CustomerRegistration() {
    const navigate = useNavigate()
    function createPost(cadastro){
       //Coloquei o fetch com essa url só pra dar uma ideia, para depois colocar a url do db
        fetch("http://localhost:5000/cadastros", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',},
            body: JSON.stringify(cadastro),}).then((resp) => resp.json()).then((data) => {
            console.log(data)
            //redirect
            navigate('/cadastros');
        }).catch(err => console.log(err))
    }

    return(
        <div className={styles.newrecord_container}>
        <h1>Cadastro de cliente</h1>
        <p>Se você não é nosso cliente, faça o seu cadstro para depois fazer a sua reserva</p>
        <CadClientForm handleSubmit={createPost} btnText="Cadastrar"/>
        <LinkButton to="/newreserva" text="Reserva"/>
        </div>
        
    )
}

export default CustomerRegistration
