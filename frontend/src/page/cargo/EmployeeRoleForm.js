import { useState } from "react";

const EmployeeRoleForm = ({ employeeRole, isDisabled, footer }) => {
    employeeRole = employeeRole ? employeeRole : {}

    const [nome, setNome] = useState(employeeRole.nome)
    const [salarioBase, setSalarioBase] = useState(employeeRole.salarioBase)

    const getFormData = () => {
        return {
            salarioBase: salarioBase,
            id: employeeRole.id,
            nome: nome,
        }
    }

    const getForm = () => {
        return (
            <div className="px-5">
                
                <div className="form-group">
                    <label> Nome: </label>
                    <input type="text" value={nome} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setNome(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Salário Base: </label>
                    <input type="number" value={salarioBase} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setSalarioBase(event.target.value) } />
                </div>
                <br/>

                { footer && footer(getFormData) }

            </div>
        )
    }

    return getForm()
}

export default EmployeeRoleForm