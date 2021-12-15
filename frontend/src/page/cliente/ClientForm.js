import { useEffect, useState } from "react";

const ClientForm = ({ client, isDisabled, footer, showPassword }) => {

    client = client ? client : {}

    const [nome, setName] = useState(client.nome)
    const [email, setEmail] = useState(client.email)
    const [nacionalidade, setNacionalidade] = useState(client.nacionalidade)
    const [dataDeNascimento, setDataDeNascimento] = useState(client.dataDeNascimento)
    const [endereco, setEndereco] = useState(client.endereco)
    const [telefone, setTelefone] = useState(client.telefone)
    const [password, setPassword] = useState("")
    const [cpf, setCPF] = useState(client.cpf)
    const [cnh, setCNH] = useState(client.cnh)

    const getFormData = () => {
        var userModel = {
            dataDeNascimento: dataDeNascimento,
            nacionalidade: nacionalidade,
            usuario: client.usuario,
            endereco: endereco,
            telefone: telefone,
            senha: password,
            id: client.id,
            email: email,
            nome: nome,
            cpf: cpf,
            cnh: cnh,
        }

        if (!showPassword) {
            delete userModel.senha
        }

        return userModel
    }

    const getForm = () => {
        return (
            <div className="px-5" >
                <div className="form-group">
                    <label> Nome: </label>
                    <input type="text" value={nome}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setName(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> Email: </label>
                    <input type="text" value={email} 
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setEmail(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> Nacionalidade: </label>
                    <input type="text" value={nacionalidade}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setNacionalidade(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> Data de Nascimento: </label>
                    <input type="date" value={dataDeNascimento} className="form-control"
                        onChange={(event) => setDataDeNascimento(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> Endereço: </label>
                    <input type="text" value={endereco}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setEndereco(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> Telefone: </label>
                    <input type="number" value={telefone} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setTelefone(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> CPF: </label>
                    <input type="number" value={cpf} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCPF(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> CNH: </label>
                    <input type="number" value={cnh} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCNH(event.target.value) } />
                </div>
                <br/>

                {
                    showPassword ? (
                        <div className="form-group">
                            <label> Senha: </label>
                            <input type="password" value={password}
                                onChange={(event) => setPassword(event.target.value) } />
                        </div>
                    ) : undefined
                }
                <br/>

                { footer && footer(getFormData) }
            </div >
        )
    }
    
    return getForm()
};

export default ClientForm