import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import VehicleService from "../../services/VehicleService";
import LocationForm from "./LocationForm";

const LocationDevolvePage = () => {
    const { id } = useParams();
    const vehicleService = VehicleService()
    const locationService = LocationService()
    const [location, setLocation] = useState(undefined)

    useEffect(async () => {
        var _location = await locationService.getById(id);

        if (_location.status != 'EM_ABERTO') {
            alert('O status da locação é diferente de EM_ABERTO, ela não pode ser entregue novamente.')
            window.location.href = "/locadora/locacao/list"
        }
        
        setLocation(_location)
    }, [])

    const devolveLocation = async (getFormData) => {
        var locationData = getFormData()

        // dar update na locacao
        var date = new Date()
        var formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        var result = await locationService.patch(locationData.id, {
            data_devolucao: formattedDate,
            status: "EM_AVALIACAO",
        })

        if (!result) {
            alert('Falha ao entregar Locação')
            window.location.href = "/locadora/locacao/list"
        }

        // dar update no veiculo
        var result = await vehicleService.patch(locationData.veiculo.id, {
            status: "EM_AVALIACAO",
        })

        if (result) {
            alert('Locação entregue com sucesso')
            window.location.href = "/locadora/locacao/list"
        } else {
            alert('Falha ao entregar Locação')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => devolveLocation(getFormData)}>Entregar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.back()}>Voltar</button>
                </div>
            </div>
        )
    }

    var except = ['dataDevolucao', 'acressimosManutencao', 'acressimosAtraso']
    var editable = []
    
    return (
        <ContentContainer title={"Entregar Locação"}>
            {
                location ? <LocationForm location={location} isDisabled={true} footer={footer} except={except} editable={editable} /> : undefined
            }
        </ContentContainer>
    )
}

export default LocationDevolvePage