
const Validator = () => { return { } }

Validator.validate = (model, validations, setErrorsState) => {
    if (!validations || validations.length === 0) return

        var fieldsToValidate = Object.keys(validations)
        const _validationErrors = {}

        for (const field of fieldsToValidate) {
            for (const validation of validations[field]) {
                var result = validation(model[field])
                if (!result.result) {
                    _validationErrors[field] = result.message
                    break
                }
            }
        }

        setErrorsState(_validationErrors)
        
        return Object.keys(_validationErrors).length === 0
}

Validator.isNotNull = (value) => {
    var _result = (value !== null) && (value !== undefined) && (!value.trim || value.trim() !== "")

    return {
        result: _result,
        message: !_result ? "O campo não pode estar vazio" : undefined
    }
}

Validator.hasOnlyNumbers = (value) => {
    var _result = /^[0-9]*$/.test(value)

    return {
        result: _result,
        message: !_result ? "O campo deve possuir apenas números" : undefined
    }
}

export default Validator