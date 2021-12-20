import { useState } from "react";
import Validator from "../../util/Validator";

const ClientForm = ({ client, isDisabled, footer, showPassword, validations }) => {

    client = client ? client : {}

    const [nome, setName] = useState(client.nome || '')
    const [email, setEmail] = useState(client.email || '')
    const [nacionalidade, setNacionalidade] = useState(client.nacionalidade || '')
    const [dataDeNascimento, setDataDeNascimento] = useState(client.dataDeNascimento || '')
    const [endereco, setEndereco] = useState(client.endereco || '')
    const [telefone, setTelefone] = useState(client.telefone || '')
    const [cpf, setCPF] = useState(client.cpf || '')
    const [cnh, setCNH] = useState(client.cnh || '')
    const [password, setPassword] = useState("")

    const [validationErrors, setValidationErrors] = useState({})

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

        if (!Validator.validate(userModel, validations, setValidationErrors)) return

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
                    <input type="text" value={nome} className={"form-control " + (validationErrors['nome'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setName(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['nome'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> Email: </label>
                    <input type="email" value={email} className={"form-control " + (validationErrors['email'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setEmail(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['email'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> Nacionalidade: </label>
                    <input type="text" value={nacionalidade} className={"form-control " + (validationErrors['nacionalidade'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setNacionalidade(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['nacionalidade'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> Data de Nascimento: </label>
                    <input type="date" value={dataDeNascimento} className={"form-control " + (validationErrors['dataDeNascimento'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => setDataDeNascimento(event.target.value) } />
                    <div className="invalid-feedback"> { validationErrors['dataDeNascimento'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> Endereço: </label>
                    <input type="text" value={endereco} className={"form-control " + (validationErrors['endereco'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setEndereco(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['endereco'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> Telefone: </label>
                    <input type="number" value={telefone} className={"form-control " + (validationErrors['telefone'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setTelefone(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['telefone'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> CPF: </label>
                    <input type="number" value={cpf} className={"form-control " + (validationErrors['cpf'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCPF(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['cpf'] } </div>
                </div>
                <br />

                <div className="form-group">
                    <label> CNH: </label>
                    <input type="number" value={cnh} className={"form-control " + (validationErrors['cnh'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCNH(event.target.value)} />
                    <div className="invalid-feedback"> { validationErrors['cnh'] } </div>
                </div>
                <br />

                {
                    showPassword ? (
                        <div className="form-group">
                            <label> Senha: </label>
                            <input type="password" value={password} className={"form-control " + (validationErrors['password'] ? "is-invalid" : "" )}
                                onChange={(event) => setPassword(event.target.value)} />
                            <div className="invalid-feedback"> { validationErrors['password'] } </div>
                        </div>
                    ) : undefined
                }
                <br />

                {footer && footer(getFormData)}
            </div >
        )
    }

    return getForm()
};

export default ClientForm