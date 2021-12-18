import { useState } from "react";

const ProviderForm = ({ provider, isDisabled, footer }) => {
    provider = provider ? provider : {}

    const [nomeEmpresa, setNomeEmpresa] = useState(provider.empresa)
    const [endereco, setEndereco] = useState(provider.endereco)
    const [telefone, setTelefone] = useState(provider.telefone)
    const [produto, setProduto] = useState(provider.produto)
    const [email, setEmail] = useState(provider.email)

    const getFormData = () => {
        return {
            empresa: nomeEmpresa,
            endereco: endereco,
            telefone: telefone,
            email: email,
            produto: produto,
            id: provider.id,
        }
    }

    const getForm = () => {
        return (
            <div className="px-5">
                <div className="form-group">
                    <label> Nome da Empresa: </label>
                    <input type="text" value={nomeEmpresa}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setNomeEmpresa(event.target.value) } />
                </div>
                <br/>

                <div className="form-group">
                    <label> Endereço: </label>
                    <input type="text" value={endereco}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setEndereco(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Telefone: </label>
                    <input type="text" value={telefone}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setTelefone(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> E-mail: </label>
                    <input type="text" value={email}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setEmail(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Produto: </label>
                    <input type="text" value={produto}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setProduto(event.target.value) } />
                </div>
                <br/>

                { footer && footer(getFormData) }
            </div>
        )
    }

    return getForm()
}

export default ProviderForm