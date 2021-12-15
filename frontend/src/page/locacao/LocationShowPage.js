import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import LocationForm from "./LocationForm";

const LocationShowPage = () => {
    const { id } = useParams();
    const locationService = LocationService()
    const [location, setLocation] = useState(undefined)
    
    useEffect(async () => {
        var _location = await locationService.getById(id);
        setLocation(_location)
    }, [])

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => window.history.back()}>Voltar</button>
                </div>
            </div>
        )
    }

    return (
        <ContentContainer title={"Consultar Locação"}>
            {
                location ? <LocationForm location={location} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
};

export default LocationShowPage