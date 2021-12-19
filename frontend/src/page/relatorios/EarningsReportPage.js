import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ReportService from "../../services/ReportService";
import LoginService from "../../services/LoginService";
import TableCard from "../../components/TableCard";
import './report.css'

const EarningsReportPage = () => {

    const reportService = ReportService()
    const [report, setReport] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _report = await reportService.getEarningsReport();
            setReport(_report)
        })()
    }, [])

    return (
        <ContentContainer title={"Relatório de receitas"} className={"report-container"}>
            {
                report && (() => (
                    <>
                        <div className="tables-section">
                            <div className="row tables-row">
                                <TableCard tableTitle={"Locações"} header={['Data Locação', 'Data Devolução', 'Valor']}
                                    source={report.locacoes} sumField={"valor"} sourceMap={element => {
                                        element['valor'] = element['valor'] + element['acressimos_atraso']
                                        return (
                                            <tr>
                                                <td>{ element['data_locacao'] }</td>
                                                <td>{ element['data_devolucao'] }</td>
                                                <td>{ element['valor'] }</td>
                                            </tr>
                                        )
                                    }} />
                                <TableCard tableTitle={"Reservas"} header={['Data Locação', 'Data Prevista Devolução', 'Valor']}
                                    source={report.reservas} sumField={"valor"} sourceMap={element => {
                                        element['valor'] = element['valor'] + element['acressimos_atraso']
                                        return (
                                            <tr>
                                                <td>{ element['data_locacao'] }</td>
                                                <td>{ element['data_prevista_devolucao'] }</td>
                                                <td>{ element['valor'] }</td>
                                            </tr>
                                        )
                                    }} />
                            </div>
                        </div>
                    </>
                )
                )()
            }
        </ContentContainer>
    )
}

export default EarningsReportPage