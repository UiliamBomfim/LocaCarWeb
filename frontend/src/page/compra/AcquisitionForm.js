import { useEffect, useState } from "react";
import ProviderService from "../../services/ProviderService";
import Select from 'react-select';

const AcquisitionForm = ({ acquisition, isDisabled, footer }) => {
    acquisition = acquisition ? acquisition : {}

    const providerService = ProviderService()

    const [valor, setValor] = useState(acquisition.valor)
    const [data, setData] = useState(acquisition.data)
    const [descricao, setDescricao] = useState(acquisition.descricao)
    const [fornecedor, setFornecedor] = useState(acquisition.fornecedor)

    const [providers, setProviders] = useState(undefined)

    useEffect(() => {
        (async () => {
            var _providers = await providerService.getAll()
            setProviders(_providers)
        })();
    }, [])

    const getFormData = () => {
        return {
            data: data,
            valor: valor,
            id: acquisition.id,
            descricao: descricao,
            fornecedor: fornecedor.value ? fornecedor.value : fornecedor.id,
        }
    }


    const getForm = () => {
        return (
            <div className="px-5">
                
                <div className="form-group">
                    <label> Data: </label>
                    <input type="date" value={data} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled? undefined : setData(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Descrição: </label>
                    <input type="text" value={descricao} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setDescricao(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Valor: </label>
                    <input type="number" value={valor} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setValor(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Fornecedor: </label>
                    <Select
                        isDisabled ={isDisabled}
                        onChange={setFornecedor}
                        defaultValue={fornecedor ? { value: fornecedor.id, label: fornecedor.empresa } : undefined}
                        options={providers ? providers.map(e => { return { value: e.id, label: e.empresa } } ) : [] }
                    />
                </div>
                <br/>

                { footer && footer(getFormData) }
            
            </div>
        )
    }
    
    return getForm()
}

export default AcquisitionForm