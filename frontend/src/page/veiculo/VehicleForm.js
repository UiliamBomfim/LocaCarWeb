import Select from 'react-select';
import { useEffect, useState } from "react";
import VehicleService from '../../services/VehicleService';

const VehicleForm = ({ vehicle, isDisabled, footer }) => {
    vehicle = vehicle ? vehicle : {}
    
    const vehicleService = VehicleService()

    const [modelo, setModelo] = useState(vehicle.modelo)
    const [placa, setPlaca] = useState(vehicle.placa)
    const [cor, setCor] = useState(vehicle.cor)
    const [ano, setAno] = useState(vehicle.ano)
    const [tipo, setTipo] = useState(vehicle.tipo)
    const [status, setStatus] = useState(vehicle.status)
    const [combustivel, setCombustivel] = useState(vehicle.combustivel)
    const [quilometragem, setQuilometragem] = useState(vehicle.quilometragem)

    const [colors, setColors] = useState(undefined)
    const [types, setTypes] = useState(undefined)
    const [states, setStates] = useState(undefined)
    
    const [defaultStatusValue, setDefaultStatusValue] = useState({})
    const [defaultColorValue, setDefaultColorValue] = useState({})
    const [defaultTypeValue, setDefaultTypeValue] = useState({})

    useEffect(() => {
        (async () => {
            var _colors = await vehicleService.getColors()
            setDefaultColorValue(vehicle ? getSelectOption(_colors, vehicle.cor) : undefined)
            setColors(_colors)
            
            var _types = await vehicleService.getTypes()
            setDefaultTypeValue(vehicle ? getSelectOption(_types, vehicle.tipo) : undefined)
            setTypes(_types)
            
            var _states = await vehicleService.getStates()
            setDefaultStatusValue(vehicle ? getSelectOption(_states, vehicle.status) : undefined)
            setStates(_states)
        })();
    }, [])

    const getFormData = () => {
        return {
            status: defaultStatusValue.value,
            cor: defaultColorValue.value,
            tipo: defaultTypeValue.value,
            modelo: modelo,
            placa: placa,
            ano: ano,
            id: vehicle.id,
            combustivel: combustivel,
            quilometragem: quilometragem,
        }
    }

    const getSelectOption = (values, key) => {
        var _value = values && values.length > 0 ?
            values.find(e => e[0] === key) :
            undefined

        if (_value)
            return { value: _value[0], label: _value[1] }

        return undefined
    }

    const getForm = () => {
        return (
            <div className="px-5">
                
                <div className="form-group">
                    <label> Modelo: </label>
                    <input type="text" value={modelo}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setModelo(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Placa: </label>
                    <input type="text" value={placa}
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setPlaca(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Cor: </label>
                    <Select
                        isDisabled ={isDisabled ? "disabled" : ""}
                        value={defaultColorValue}
                        onChange={(item) => { setCor(item); setDefaultColorValue(item) }}
                        options={ colors ? colors.map(e => { return { value: e[0], label: e[1] } } ) : [] }
                    />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Ano: </label>
                    <input type="number" value={ano} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setAno(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Tipo: </label>
                    <Select
                        isDisabled ={isDisabled ? "disabled" : ""}
                        value={defaultTypeValue}
                        onChange={(item) => { setTipo(item); setDefaultTypeValue(item) }}
                        options={ types ? types.map(e => { return { value: e[0], label: e[1] } } ) : [] }
                    />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Status: </label>
                    <Select
                        isDisabled ={isDisabled ? "disabled" : ""}
                        value={defaultStatusValue}
                        onChange={(item) => { setStatus(item); setDefaultStatusValue(item) }}
                        options={ states ? states.map(e => { return { value: e[0], label: e[1] } } ) : [] }
                    />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Combustível: </label>
                    <input type="number" value={combustivel} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setCombustivel(event.target.value) } />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Quilometragem: </label>
                    <input type="number" value={quilometragem} className="form-control"
                        disabled={isDisabled ? "disabled" : ""}
                        onChange={(event) => isDisabled ? undefined : setQuilometragem(event.target.value) } />
                </div>
                <br/>
    
                { footer && footer(getFormData) }
            </div>
        )
    };

    return getForm()
}

export default VehicleForm
