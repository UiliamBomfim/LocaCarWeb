import ContentContainer from "../../components/ContentContainer";
import EmployeeService from "../../services/EmployeeService";
import LoginService from '../../services/LoginService';
import { useEffect } from "react";
import EmployeeForm from "./EmployeeForm";

const EmployeeCreatePage = () => {
    const employeeService = EmployeeService()

    useEffect(async () => {
        LoginService.checkPermission(['employee'])
    }, [])

    const saveEmployee = async (getFormData) => {
        var employeeData = getFormData()
        
        delete employeeData.id

        var result = await employeeService.post(employeeData)

        if (result) {
            alert('Cadastro realizado com sucesso')
            window.location.href = "/locadora/funcionarios/list"
        } else {
            alert('Falha ao realizar cadastro')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => saveEmployee(getFormData)}>Salvar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Cadastrar Funcionário"}>
            {
                <EmployeeForm isDisabled={false} footer={footer} showPassword={true} />
            }
        </ContentContainer>
    )
}

export default EmployeeCreatePage