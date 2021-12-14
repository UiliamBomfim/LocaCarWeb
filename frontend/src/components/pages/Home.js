import styles from './Home.module.css'
import chavecar from '../../img/chavecar.jpg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>LoCarWeb</span></h1>
            <p>Venha curtir as paisagens da nossa cidade com conforto e facilidades que você merece!</p>
            <p>Reserve o seu carro conosco, fazendo o seu cadastro agora mesmo!</p>
            <LinkButton to="/customerregistration" text="Cadastro"/>
            <p>Se já é membro, realiaze o login.</p>
            <LinkButton to="/login" text="Login"/>
           <img src={chavecar} alt="Chavecar" />
           
        </section>
    )
}

export default Home