import { useEffect, useState } from "react";

const locationForm = ({ location, isDisabled, footer, except }) => {

    location = location ? location : {}
    except = except && except.length > 0 ? except : []

    const [dataPrevistaDevolucao, setDataPrevistaDevolucao] = useState(location.data_prevista_devolucao)
    const [acressimosManutencao, setAcressimosManutencao] = useState(location.acressimos_manutencao)
    const [acressimosAtraso, setAcressimosAtraso] = useState(location.acressimos_atraso)
    const [dataDevolucao, setDataDevolucao] = useState(location.data_devolucao)
    const [funcionario, setFuncionario] = useState(location.funcionario)
    const [dataLocacao, setDataLocacao] = useState(location.data_locacao)
    const [status, setStatus] = useState(location.status)
    const [cliente, setCliente] = useState(location.cliente)
    const [veiculo, setVeiculo] = useState(location.veiculo)
    const [valor, setValor] = useState(location.valor)

    const getFormData = () => {
        return {
            dataPrevistaDevolucao: dataPrevistaDevolucao,
            acressimosManutencao: acressimosManutencao,
            acressimosAtraso: acressimosAtraso,
            dataDevolucao: dataDevolucao,
            funcionario: funcionario,
            dataLocacao: dataLocacao,
            cliente: cliente,
            veiculo: veiculo,
            status: status,
            valor: valor,
            id: location.id,
        }
    }

    const getForm = () => {
        return (
            <div className="px-5" >
                {
                    except.includes('dataPrevistaDevolucao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Data Prevista de devolução: </label>
                                <input type="text" value={dataPrevistaDevolucao}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setDataPrevistaDevolucao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('acressimosManutencao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Acréssimo de manutenção: </label>
                                <input type="text" value={acressimosManutencao}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setAcressimosManutencao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('acressimosAtraso') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Acréssimo de atraso: </label>
                                <input type="text" value={acressimosAtraso}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setAcressimosAtraso(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('dataDevolucao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Acréssimo de manutenção: </label>
                                <input type="text" value={dataDevolucao}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setDataDevolucao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('funcionario') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Funcionário aprovador: </label>
                                <input type="text" value={funcionario}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setFuncionario(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('dataLocacao') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Data de locação: </label>
                                <input type="text" value={dataLocacao}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setDataLocacao(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('cliente') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Solicitante: </label>
                                <input type="text" value={cliente}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setCliente(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('veiculo') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Veiculo: </label>
                                <input type="text" value={veiculo}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setVeiculo(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('status') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Status da locação: </label>
                                <input type="text" value={status}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setStatus(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                {
                    except.includes('valor') ? undefined : (
                        <>
                            <div className="form-group">
                                <label> Valor da locação: </label>
                                <input type="text" value={valor}
                                    disabled={isDisabled ? "disabled" : ""}
                                    onChange={(event) => isDisabled ? undefined : setValor(event.target.value) } />
                            </div>
                            <br/>
                        </>
                    )
                }

                { footer && footer(getFormData) }
            </div >
        )
    }
    
    return getForm()
};

export default locationForm