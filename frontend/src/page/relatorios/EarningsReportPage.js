import { PieChart, Pie, Legend, Tooltip, Cell} from 'recharts';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ReportService from "../../services/ReportService";
import LoginService from "../../services/LoginService";
import TableCard from "../../components/TableCard";
import './report.css'

const EarningsReportPage = () => {

    const chartColors = ['#0088FE', '#00C49F', '#FFBB28'];
    const reportService = ReportService()
    const [report, setReport] = useState(undefined)
    const [charData, setChartData] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _report = await reportService.getEarningsReport();
            setChartData(getDataToChart(_report))
            setReport(_report)
        })()
    }, [])

    const getDataToChart = (report) => {
        return [
            { name: 'Locações Fechadas', value: report.locacoesAbertas.reduce((a, b) => a + b.valor, 0) },
            { name: 'Locações Abertas', value: report.locacoesFechadas.reduce((a, b) => a + b.valor + b.acressimos_atraso, 0) },
        ]
    }

    return (
        <ContentContainer title={"Relatório de receitas"} className={"report-container"}>
            {
                report && (() => (
                    <>
                        <div className="chart-section row justify-content-md-center">
                                <PieChart width={400} height={400}>
                                    <Pie dataKey="value" data={charData} label>
                                        {charData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                        </div>
                        <div className="tables-section">
                            <div className="row tables-row">
                                <TableCard tableTitle={"Locações Recebidas"} header={['Data Locação', 'Data Devolução', 'Valor']}
                                    source={report.locacoesAbertas} sumField={"valor"} sourceMap={element => {
                                        element['valor'] = element['valor'] + element['acressimos_atraso']
                                        return (
                                            <tr>
                                                <td>{ element['data_locacao'] }</td>
                                                <td>{ element['data_devolucao'] }</td>
                                                <td>{ element['valor'] }</td>
                                            </tr>
                                        )
                                    }} />
                                <TableCard tableTitle={"Locações a receber"} header={['Data Locação', 'Data Prevista Devolução', 'Valor']}
                                    source={report.locacoesFechadas} sumField={"valor"} sourceMap={element => {
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