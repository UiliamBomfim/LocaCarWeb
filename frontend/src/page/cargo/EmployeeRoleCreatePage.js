import ContentContainer from "../../components/ContentContainer";
import EmployeeRoleService from "../../services/EmployeeRoleService";
import LoginService from '../../services/LoginService';
import { useEffect } from "react";
import EmployeeRoleForm from "./EmployeeRoleForm";

const EmployeeRoleCreatePage = () => {
    const employeeRoleService = EmployeeRoleService()

    useEffect(() => {
        LoginService.checkPermission(['employee'])
    }, [])

    const saveEmployeeRole = async (getFormData) => {
        var employeeRoleData = getFormData()
        
        delete employeeRoleData.id

        var result = await employeeRoleService.post(employeeRoleData)

        if (result) {
            alert('Cadastro realizado com sucesso')
            window.location.href = "/locadora/cargos/list"
        } else {
            alert('Falha ao realizar cadastro')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => saveEmployeeRole(getFormData)}>Salvar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Cadastrar Cargo"}>
            {
                <EmployeeRoleForm isDisabled={false} footer={footer} />
            }
        </ContentContainer>
    )
}

export default EmployeeRoleCreatePage
