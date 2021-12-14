import {useState} from 'react'
import styles from './CadClientForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function CadClientForm({handleSubmit, btnText, cadastroData}){
    
    const [cadastro, setCadastro] = useState(cadastroData || {})
        
    const submit = (e) => {
       e.preventDefault()
       handleSubmit(cadastro)
   }

   function handleChange(e) {
       setCadastro({ ...cadastro, [e.target.name]: e.target.value})
       
   }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome" name="name" placeholder="Insira o nome completo" handleOnChange={handleChange} value={cadastro.name ? cadastro.name.id : ''}/>
            <Input type="number" text="CPF" name="cpf" placeholder="CPF"  handleOnChange={handleChange} value={cadastro.cpf ? cadastro.cpf.id : ''}/>
            <Input type="number" text="RG" name="rg" placeholder="RG"  handleOnChange={handleChange} value={cadastro.rg ? cadastro.rg.id : ''}/>
            <Input type="text" text="Endereço" name="adress" placeholder="Endereço"  handleOnChange={handleChange} value={cadastro.adress ? cadastro.adress.id : ''}/>
            <Input type="number" text="CNH" name="cnh" placeholder="CNH"  handleOnChange={handleChange} value={cadastro.cnh ? cadastro.cnh.id : ''}/>
            <Input type="email" text="Email" name="email" placeholder="Email"  handleOnChange={handleChange} value={cadastro.email ? cadastro.email.id : ''}/>
            <Input type="password" text="Senha" name="password" placeholder="Senha"  handleOnChange={handleChange} value={cadastro.password ? cadastro.password.id : ''}/>
            <SubmitButton  text={btnText}/>
        </form>
    ) 
  
}

export default CadClientForm;
