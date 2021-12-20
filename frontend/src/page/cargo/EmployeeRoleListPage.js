import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import EmployeeRoleService from "../../services/EmployeeRoleService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const EmployeeRoleListPage = () => {
    const employeeRoleService = EmployeeRoleService()
    const [employeeRoles, setEmployeeRoles] = useState([])
    
    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _acquisitions = await employeeRoleService.getAll();
            setEmployeeRoles(_acquisitions)
        })();
    }, [])

    const tableActions = () => {
        return (
            <div className="mb-5">
                <div className="d-flex justify-content-end">
                    <a className="btn btn-sm btn-primary" href={"/locadora/cargos/create/"} role="button">Cadastrar</a>
                </div>
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Cargos"}>
            { 
                <Table  header={['Descrição', 'Salário base', 'Ações']} tableActions={tableActions}>
                    {
                        employeeRoles && employeeRoles.map((element, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ element['nome'] }</td>
                                    <td>{ element['salarioBase'] }</td>
                                    <td>{
                                        <div className="d-flex justify-content-end">
                                            <a className="btn btn-sm btn-primary pr-5" href={"/locadora/cargos/edit/" + element['id']} role="button">Editar</a>
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary pr-5" href={"/locadora/cargos/delete/" + element['id']} role="button">Deletar</a>
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/cargos/show/" + element['id']} role="button">Consultar</a>
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

export default EmployeeRoleListPage
