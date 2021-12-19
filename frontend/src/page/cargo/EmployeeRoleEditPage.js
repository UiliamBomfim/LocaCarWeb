import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import EmployeeRoleService from '../../services/EmployeeRoleService';
import LoginService from '../../services/LoginService';
import EmployeeRoleForm from './EmployeeRoleForm';

const EmployeeRoleEditPage = () => {
    const { id } = useParams();
    const employeeRoleService = EmployeeRoleService()
    const [employeeRole, setEmployeeRole] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _employeeRole = await employeeRoleService.getById(id);
            setEmployeeRole(_employeeRole)
        })();
    }, [])

    const saveEmployeeRole = async (getFormData) => {
        var employeeRoleData = getFormData()
        
        delete employeeRoleData.id

        var result = await employeeRoleService.put(id, employeeRoleData)

        if (result) {
            alert('Alteração realizada com sucesso')
            window.location.href = "/locadora/cargos/list"
        } else {
            alert('Falha ao realizar alteração')
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
        <ContentContainer title={"Editar Cargo"}>
            {
                employeeRole ? <EmployeeRoleForm employeeRole={employeeRole} isDisabled={false} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default EmployeeRoleEditPage