import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import EmployeeService from "../../services/EmployeeService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const EmployeeListPage = () => {
    const employeeService = EmployeeService()
    const [employees, setEmployee] = useState([])
    const userIsEmployee = LoginService.userIsEmployee()

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _employees = await employeeService.getAll();
            setEmployee(_employees)
        })()
    }, [])

    const tableActions = () => {
        return (
            <div className="mb-5">
                {
                    userIsEmployee ? (
                        <div className="d-flex justify-content-end">
                            <a className="btn btn-sm btn-primary" href={"/locadora/funcionarios/create/"} role="button">Cadastrar</a>
                        </div>
                    ) : undefined
                }
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Funcionários"}>
            { 
                <Table  header={['Nome', 'Endereço', 'Email', 'Função', 'Ações']} tableActions={tableActions}>
                    {
                        employees && employees.map(element => {
                            return (
                                <tr>
                                    <td>{ element['nome'] }</td>
                                    <td>{ element['endereco'] }</td>
                                    <td>{ element['email'] }</td>
                                    <td>{ element['funcao']['nome'] }</td>
                                    <td className="d-flex justify-content-end">{
                                        <>
                                            <a className="btn btn-sm btn-primary pr-5" href={"/locadora/funcionarios/edit/" + element['id']} role="button">Editar</a>
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/funcionarios/show/" + element['id']} role="button">Consultar</a>
                                        </>
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

export default EmployeeListPage
