import { useEffect, useState } from "react";
import EmployeeRoleService from "../../services/EmployeeRoleService";
import Select from 'react-select';

const EmployeeForm = ({ employee, isDisabled, footer, showPassword }) => {
    employee = employee ? employee : {}

    const employeeRoleService = EmployeeRoleService()
    
    const [nome, setNome] = useState(employee.nome)
    const [nacionalidade, setNacionalidade] = useState(employee.nacionalidade)
    const [dataDeNascimento, setDataDeNascimento] = useState(employee.dataDeNascimento)
    const [endereco, setEndereco] = useState(employee.endereco)
    const [telefone, setTelefone] = useState(employee.telefone)
    const [cpf, setCpf] = useState(employee.cpf)
    const [email, setEmail] = useState(employee.email)
    const [funcao, setFuncao] = useState(employee.funcao)
    const [password, setPassword] = useState("")

    const [employeeRoles, setEmployeeRoles] = useState([])

    useEffect(async () => {
        var _employeeRoles = await employeeRoleService.getAll()
        setEmployeeRoles(_employeeRoles)
    }, [])

    const getFormData = () => {
        var employeeModel = {
            nome: nome,
            nacionalidade: nacionalidade,
            dataDeNascimento: dataDeNascimento,
            endereco: endereco,
            telefone: telefone,
            cpf: cpf,
            email: email,
            funcao: funcao.value,
            id: employee.id,
            senha: password,
        }

        if (!showPassword) {
            delete employeeModel.senha
        }

        return employeeModel
    }

    const getForm = () => {
        return (
            <div className="px-5">
                <div className="form-group">
                    <label> Nome: </label>
                    <input type="text" value={nome}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setNome(event.target.value) } />
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
                    <label> Data de nascimento: </label>
                    <input type="date" value={dataDeNascimento} className="form-control"
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
                    <input type="number" value={telefone} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setTelefone(event.target.value) } />
                </div>
                <br/>

                <div className="form-group">
                    <label> CPF: </label>
                    <input type="number" value={cpf} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCpf(event.target.value) } />
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
                    <label> Função: </label>
                    <Select
                        isDisabled ={isDisabled}
                        defaultValue={ employee && employee.funcao ? { value: employee.funcao.id, label: employee.funcao.nome } : undefined}
                        onChange={setFuncao}
                        options={employeeRoles.map(e => { return { value: e.id, label: e.nome } } )}
                    />
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
            </div>
        )
    }

    return getForm()
}

export default EmployeeForm