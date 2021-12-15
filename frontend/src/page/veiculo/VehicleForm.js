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

    const [defaultColorValue, setDefaultColorValue] = useState([])

    useEffect(async () => {
        var _colors = await vehicleService.getColors()
        setColors(_colors)
        
        var _types = await vehicleService.getTypes()
        setTypes(_types)
        
        var _states = await vehicleService.getStates()
        setStates(_states)
    }, [])

    const getFormData = () => {
        return {
            modelo: modelo,
            placa: placa,
            cor: cor.value,
            ano: ano,
            tipo: tipo.value,
            status: status.value,
            id: vehicle.id,
            combustivel: combustivel,
            quilometragem: quilometragem,
        }
    }

    const getSelectOption = (values, key) => {
        var _value = values.find(e => e[0] == key)

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
                        defaultValue={ (colors && colors.length > 0 && vehicle) ? getSelectOption(colors, vehicle.cor) : undefined}
                        onChange={setCor}
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
                        defaultValue={ types && types.length > 0 && vehicle ? getSelectOption(types, vehicle.tipo) : undefined}
                        onChange={setTipo}
                        options={ types ? types.map(e => { return { value: e[0], label: e[1] } } ) : [] }
                    />
                </div>
                <br/>
                
                <div className="form-group">
                    <label> Status: </label>
                    <Select
                        isDisabled ={isDisabled ? "disabled" : ""}
                        defaultValue={ states && states.length > 0 && vehicle ? getSelectOption(states, vehicle.status) : undefined}
                        onChange={setStatus}
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