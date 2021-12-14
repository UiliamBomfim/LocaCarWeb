import {Link} from 'react-router-dom'

import Container from './Container'
import React from 'react'
import styles from './Navbar.module.css'

import logo from '../../img/locar_logo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                 <Link to="/">
                    <img src={logo} alt="LoCarWeb" />
                </Link>
              <ul className={styles.list}>
                  <li className={styles.item}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={styles.item}>
                  <Link to="/client">Cliente</Link>
                  </li>
                  <li className={styles.item}>
                  <Link to="/reservas">Reservas</Link>
                  </li>
                  <li className={styles.item}>
                  <Link to="/company">Empresa</Link>
                  </li>
		  <li className={styles.item}>
                  <Link to="/contact">Contato</Link>
                  </li>
              </ul>
            </Container>
        </nav>
    )
}

export default Navbar;