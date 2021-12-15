import { useEffect, useState } from "react";
import VehicleService from "../../services/VehicleService";
import EmployeeService from "../../services/EmployeeService";
import ClientService from "../../services/ClientService";
import Select from 'react-select';

const LocationForm = ({ location, isDisabled, footer, except, editable }) => {

    location = location ? location : {}
    except = except && except.length > 0 ? except : []
    editable = editable && editable.length > 0 ? editable : []

    const employeeService = EmployeeService()
    const vehicleService = VehicleService()
    const clientService = ClientService()

    const [dataPrevistaDevolucao, setDataPrevistaDevolucao] = useState(location.data_prevista_devolucao)
    const [acressimosManutencao, setAcressimosManutencao] = useState(location.acressimos_manutencao)
    const [acressimosAtraso, setAcressimosAtraso] = useState(location.acressimos_atraso)
    const [dataDevolucao, setDataDevolucao] = useState(location.data_devolucao)
    const [dataLocacao, setDataLocacao] = useState(location.data_locacao)
    const [funcionario, setFuncionario] = useState(location.funcionario)
    const [status, setStatus] = useState(location.status)
    const [cliente, setCliente] = useState(location.cliente)
    const [veiculo, setVeiculo] = useState(location.veiculo)
    const [valor, setValor] = useState(location.valor)

    const [employees, setEmployees] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [clients, setClients] = useState([])

    useEffect(async () => {
        var _employees = await employeeService.getAll()
        setEmployees(_employees)
        
        var _vehicles = await vehicleService.getAll()
        setVehicles(_vehicles)
        
        var _clients = await clientService.getAll()
        setClients(_clients)
    }, [])

    const getFormData = () => {
        return {
            dataPrevistaDevolucao: dataPrevistaDevolucao,
            acressimosManutencao: acressimosManutencao,
            acressimosAtraso: acressimosAtraso,
            dataDevolucao: dataDevolucao,
            funcionario: funcionario,
            dataLocacao: dataLocacao,
            cliente: cliente,
            veiculo: veiculo,
            status: status,
            valor: valor,
            id: location.id,
        }
    }

    const isFieldDisabled = (field) => {
        return isDisabled && !editable.includes(field)
    }

    const getForm = () => {
        return (
            <div className="px-5" >
                {
                    except.includes('dataLocacao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Data de locação: </label>
                                <input type="text" value={dataLocacao}
                                    disabled={isFieldDisabled('dataLocacao') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('dataLocacao') ? undefined : setDataLocacao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('dataPrevistaDevolucao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Data Prevista de devolução: </label>
                                <input type="text" value={dataPrevistaDevolucao}
                                    disabled={isFieldDisabled('dataPrevistaDevolucao') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('dataPrevistaDevolucao') ? undefined : setDataPrevistaDevolucao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('dataDevolucao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Data de devolução: </label>
                                <input type="text" value={dataDevolucao}
                                    disabled={isFieldDisabled('dataDevolucao') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('dataDevolucao') ? undefined : setDataDevolucao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('funcionario') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Funcionário aprovador: </label>
                                <Select
                                    isDisabled ={isFieldDisabled('funcionario')}
                                    defaultValue={ funcionario ? { value: funcionario.id, label: funcionario.nome } : undefined}
                                    onChange={setFuncionario}
                                    options={employees.map(e => { return { value: e.id, label: e.nome } } )}
                                />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('cliente') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Solicitante: </label>
                                <Select
                                    isDisabled ={isFieldDisabled('cliente')}
                                    defaultValue={{ value: cliente.id, label: cliente.nome }}
                                    options={clients.map(e => { return { value: e.id, label: e.nome } } )}
                                />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('veiculo') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Veiculo: </label>
                                <Select
                                    isDisabled ={isFieldDisabled('veiculo')}
                                    defaultValue={{ value: veiculo.id, label: veiculo.modelo + " | " + veiculo.cor }}
                                    onChange={setVeiculo}
                                    options={vehicles.map(e => { return { value: e.id, label: e.modelo + " | " + e.cor } } )}
                                />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('status') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Status da locação: </label>
                                <input type="text" value={status}
                                    disabled={isFieldDisabled('status') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('status') ? undefined : setStatus(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('acressimosManutencao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Acréssimo de manutenção: </label>
                                <input type="text" value={acressimosManutencao}
                                    disabled={isFieldDisabled('acressimosManutencao') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('acressimosManutencao') ? undefined : setAcressimosManutencao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('acressimosAtraso') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Acréssimo de atraso: </label>
                                <input type="text" value={acressimosAtraso}
                                    disabled={isFieldDisabled('acressimosAtraso') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('acressimosAtraso') ? undefined : setAcressimosAtraso(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('valor') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Valor da locação: </label>
                                <input type="text" value={valor}
                                    disabled={isFieldDisabled('valor') ? "disabled" : ""}
                                    onChange={(event) => isFieldDisabled('valor') ? undefined : setValor(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                { footer && footer(getFormData) }
            </div >
        )
    }
    
    return getForm()
};

export default LocationForm