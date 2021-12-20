import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import VehicleService from "../../services/VehicleService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";
import Select from 'react-select';

const VehicleListPage = () => {

    const vehicleService = VehicleService()
    const [vehicles, setVehicles] = useState([])
    const userIsEmployee = LoginService.userIsEmployee()

    const [colorFilter, setColorFilter] = useState()
    const [colors, setColors] = useState([])

    const [typeFilter, setTypeFilter] = useState([])
    const [types, setTypes] = useState()

    useEffect(() => {
        (async () => {
            var queryParam = !userIsEmployee ? "?status=INDISPONIVEL" : ""
            var _vehicles = await vehicleService.getAll(queryParam);
            setVehicles(_vehicles)
            
            var _colors = await vehicleService.getColors()
            setColors(_colors)
            
            var _types = await vehicleService.getTypes()
            setTypes(_types)
        })()
    }, [])

    const search = async () => {
        var queryParam = !userIsEmployee ? "?status=INDISPONIVEL" : undefined

        var filter = colorFilter && colorFilter.value ? "cor="+colorFilter.value : undefined
        queryParam = filter ? (queryParam ? queryParam + "&"+filter : "?"+filter) : queryParam

        filter = typeFilter && typeFilter.value ? "tipo="+typeFilter.value : undefined
        queryParam = filter ? (queryParam ? queryParam + "&"+filter : "?"+filter) : queryParam

        var _vehicles = await vehicleService.getAll(queryParam);
        setVehicles(_vehicles)
    }

    const tableActions = () => {
        return (
            <div className="mb-5">
                <div className="row my-4 col-md-12 offset-1">
                    <div className="col-md-4">
                        <Select onChange={setColorFilter} placeholder="Selecione uma cor" isClearable
                            options={ colors ? colors.map(e => { return { value: e[0], label: e[1] } } ) : [] } />
                    </div>
                    <div className="col-md-4">
                        <Select onChange={setTypeFilter} placeholder="Selecione um tipo" isClearable
                            options={ types ? types.map(e => { return { value: e[0], label: e[1] } } ) : [] } />
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-sm btn-primary" style={{height: '100%'}}
                            onClick={search}>
                            Pesquisar
                        </button>
                    </div>
                </div>
                {
                    userIsEmployee ? (
                        <div className="d-flex justify-content-end col-md-12">
                            <a className="btn btn-sm btn-primary" href={"/locadora/veiculos/create/"} role="button">Cadastrar</a>
                        </div>
                    ) : undefined
                }
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Veículos"}>
            { 
                <Table  header={['Modelo', 'Placa', 'Cor', 'Ano', 'Tipo', 'Status', 'Ações']} tableActions={tableActions}>
                    {
                        vehicles.map(element => {
                            return (
                                <tr>
                                    <td>{ element['modelo'] }</td>
                                    <td>{ element['placa'] }</td>
                                    <td>{ element['cor'] }</td>
                                    <td>{ element['ano'] }</td>
                                    <td>{ element['tipo'] }</td>
                                    <td>{ element['status'] }</td>
                                    <td>{
                                        <div className="d-flex justify-content-end">
                                            {(userIsEmployee && element['status'] !== 'INDISPONIVEL' ? <a className="btn btn-sm btn-primary pr-5" href={"/locadora/veiculos/delete/" + element['id']} role="button">Deletar</a> : "")}
                                            &nbsp;&nbsp;
                                            {(userIsEmployee ? <a className="btn btn-sm btn-primary pr-5" href={"/locadora/veiculos/edit/" + element['id']} role="button">Editar</a> : "")}
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/veiculos/show/" + element['id']} role="button">Consultar</a>
                                        </div>
                                     }</td>
                                </tr>
                            )
                        })
                    }
                </Table>
            }
        </ContentContainer>
    )
}

export default VehicleListPage
