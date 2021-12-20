import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import EmployeeRoleService from '../../services/EmployeeRoleService';
import LoginService from '../../services/LoginService';
import EmployeeRoleForm from './EmployeeRoleForm';

const EmployeeRoleDeletePage = () => {
    const { id } = useParams();
    const employeeRoleService = EmployeeRoleService()
    const [employeeRole, setEmployeeRole] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _employeeRole = await employeeRoleService.getById(id);
            setEmployeeRole(_employeeRole)
        })()
    }, [])

    const deleteEmployeeRole = async (getFormData) => {
        var result = await employeeRoleService.del(id)

        if (result) {
            alert('Exclusão realizada com sucesso')
            window.location.href = "/locadora/cargos/list"
        } else {
            alert('Falha ao realizar axclusão')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => deleteEmployeeRole(getFormData)}>Excluir</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Deletar Cargo"}>
            {
                employeeRole ? <EmployeeRoleForm employeeRole={employeeRole} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )

}

export default EmployeeRoleDeletePage