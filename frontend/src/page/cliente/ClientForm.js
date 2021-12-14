import { useEffect, useState } from "react";

const ClientForm = ({ client, isDisabled, footer }) => {

    client = client ? client : {}

    const [nome, setName] = useState(client.nome)
    const [email, setEmail] = useState(client.email)
    const [nacionalidade, setNacionalidade] = useState(client.nacionalidade)
    const [dataDeNascimento, setDataDeNascimento] = useState(client.dataDeNascimento)
    const [endereco, setEndereco] = useState(client.endereco)
    const [telefone, setTelefone] = useState(client.telefone)
    const [cpf, setCPF] = useState(client.cpf)
    const [cnh, setCNH] = useState(client.cnh)

    const getFormData = () => {
        return {
            dataDeNascimento: dataDeNascimento,
            nacionalidade: nacionalidade,
            usuario: client.usuario,
            endereco: endereco,
            telefone: telefone,
            id: client.id,
            email: email,
            nome: nome,
            cpf: cpf,
            cnh: cnh,
        }
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
                    <label> Nascimento: </label>
                    <input type="text" value={dataDeNascimento}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setDataDeNascimento(event.target.value) } />
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
                    <input type="text" value={telefone}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setTelefone(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> CPF: </label>
                    <input type="text" value={cpf}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCPF(event.target.value) } />
                </div>
                <br/>
    
                <div className="form-group">
                    <label> CNH: </label>
                    <input type="text" value={cnh}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCNH(event.target.value) } />
                </div>
                <br/>

                { footer(getFormData) }
            </div >
        )
    }
    
    return getForm()
};

export default ClientForm