import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import VehicleService from "../../services/VehicleService";
import LoginService from "../../services/LoginService";
import LocationForm from "./LocationForm";

const LocationApprovePage = () => {
    const { id } = useParams();
    const vehicleService = VehicleService()
    const locationService = LocationService()
    const [location, setLocation] = useState(undefined)

    useEffect(async () => {
        LoginService.checkPermission(['employee'])
        var _location = await locationService.getById(id);

        if (_location.status != 'RESERVA') {
            alert('O status da locação é diferente de RESERVA, ela não pode ser aprovada novamente.')
            window.location.href = "/locadora/locacao/list"
        }
        
        setLocation(_location)
    }, [])

    const approveLocation = async (getFormData) => {
        var locationData = getFormData()
        var user = LoginService.getUser()

        // dar update na locacao
        var result = await locationService.patch(locationData.id, {
            valor: locationData.valor,
            funcionario: user.id,
            status: "EM_ABERTO",
        })

        if (!result) {
            alert('Falha ao aprovar Locação')
            window.location.href = "/locadora/locacao/list"
        }

        // dar update no veiculo
        var result = await vehicleService.patch(locationData.veiculo.id, {
            status: "INDISPONIVEL",
        })

        if (result) {
            alert('Locação aprovada com sucesso')
            window.location.href = "/locadora/locacao/list"
        } else {
            alert('Falha ao aprovar Locação')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => approveLocation(getFormData)}>Aprovar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }

    var except = ['dataDevolucao', 'funcionario', 'acressimosManutencao', 'acressimosAtraso']
    var editable = ['valor']
    
    return (
        <ContentContainer title={"Aprovar Locação"}>
            {
                location ? <LocationForm location={location} isDisabled={true} footer={footer} except={except} editable={editable} /> : undefined
            }
        </ContentContainer>
    )
};

export default LocationApprovePage