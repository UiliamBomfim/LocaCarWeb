import ContentContainer from "../components/ContentContainer"

const Home = () => {

    document.title = "Bem-vindo ao LoCarWeb"

    return (
        <ContentContainer>
            <section className="text-center">
                <h1>Bem-vindo ao <span>LoCarWeb</span></h1>
            </section>
        </ContentContainer>
    )
}

export default Home