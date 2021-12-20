import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import EmployeeRoleService from '../../services/EmployeeRoleService';
import LoginService from '../../services/LoginService';
import EmployeeRoleForm from './EmployeeRoleForm';

const EmployeeRoleShowPage = () => {
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

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Consultar Cargo"}>
            {
                employeeRole ? <EmployeeRoleForm employeeRole={employeeRole} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )

}

export default EmployeeRoleShowPage