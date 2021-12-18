import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import EmployeeService from '../../services/EmployeeService';
import LoginService from '../../services/LoginService';
import EmployeeForm from './EmployeeForm';

const EmployeeShowPage = () => {
    const { id } = useParams();
    const employeeService = EmployeeService()
    const [employee, setEmployee] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _employee = await employeeService.getById(id);
            setEmployee(_employee)
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
        <ContentContainer title={"Consultar Funcionário"}>
            {
                employee ? <EmployeeForm employee={employee} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default EmployeeShowPage
