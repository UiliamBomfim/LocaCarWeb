import { useState } from "react";
import Validator from "../../util/Validator";

const EmployeeRoleForm = ({ employeeRole, isDisabled, footer, validations }) => {
    employeeRole = employeeRole ? employeeRole : {}

    const [nome, setNome] = useState(employeeRole.nome || '')
    const [salarioBase, setSalarioBase] = useState(employeeRole.salarioBase || 0)

    const [validationErrors, setValidationErrors] = useState({})

    const getFormData = () => {
        var model = {
            salarioBase: salarioBase,
            id: employeeRole.id,
            nome: nome,
        }

        if (!Validator.validate(model, validations, setValidationErrors)) return

        return model
    }

    const getForm = () => {
        return (
            <div className="px-5">
                <div className="form-group">
                    <label> Nome: </label>
                    <input type="text" value={nome} className={"form-control " + (validationErrors['nome'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setNome(event.target.value) } />
                    <div className="invalid-feedback"> { validationErrors['nome'] } </div>
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Salário Base: </label>
                    <input type="number" value={salarioBase} className={"form-control " + (validationErrors['salarioBase'] ? "is-invalid" : "" )}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setSalarioBase(event.target.value) } />
                    <div className="invalid-feedback"> { validationErrors['salarioBase'] } </div>
                </div>
                <br/>

                { footer && footer(getFormData) }

            </div>
        )
    }

    return getForm()
}

export default EmployeeRoleForm