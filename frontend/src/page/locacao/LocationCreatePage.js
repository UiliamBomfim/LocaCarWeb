import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import LocationForm from "./LocationForm";

const LocationCreatePage = () => {
    const locationService = LocationService()

    const createLocation = async (getFormData) => {
        var locationData = getFormData()

        // TODO: pegar id do cliente logado
        var result = await locationService.post({
            data_prevista_devolucao: locationData.dataPrevistaDevolucao,
            data_locacao: locationData.dataLocacao,
            veiculo: locationData.veiculo.value,
            acressimos_manutencao: 0.0,
            acressimos_atraso: 0.0,
            data_devolucao: null,
            funcionario: null,
            status: "RESERVA",
            cliente: 1,
            valor: 0.0
        })

        if (result) {
            alert('Locação criada com sucesso')
            window.location.href = "/locadora/locacao/list"
        } else {
            alert('Falha ao criar Locação')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => createLocation(getFormData)}>Cadastrar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.back()}>Voltar</button>
                </div>
            </div>
        )
    }

    var except = ['dataDevolucao', 'acressimosManutencao', 'acressimosAtraso', 'funcionario', 'cliente', 'status', 'valor']

    return (
        <ContentContainer title={"Realizar Locação"}>
            {
                <LocationForm footer={footer} except={except} action={'create'} />
            }
        </ContentContainer>
    )
};

export default LocationCreatePage