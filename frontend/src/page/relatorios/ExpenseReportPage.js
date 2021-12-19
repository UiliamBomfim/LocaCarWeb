import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ReportService from "../../services/ReportService";
import LoginService from "../../services/LoginService";
import TableCard from "../../components/TableCard";
import './report.css'

const ExpenseReportPage = () => {

    const reportService = ReportService()
    const [report, setReport] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _report = await reportService.getExpenseReport();
            setReport(_report)
        })()
    }, [])

    return (
        <ContentContainer title={"Relatório de despesas"}>
            {
                report && (() => (
                    <>
                        <div className="tables-section">
                            <div className="row tables-row">
                                <TableCard tableTitle={"Compras"} header={['Descrição', 'Data', 'Valor']}
                                    source={report.aquisicoes} sumField={"valor"} sourceMap={element => {
                                        return (
                                            <tr>
                                                <td>{ element['descricao'] }</td>
                                                <td>{ element['data'] }</td>
                                                <td>{ element['valor'] }</td>
                                            </tr>
                                        )
                                    }} />
                                <TableCard tableTitle={"Funcionários"} header={['Nome', 'Cargo', 'Salário']}
                                    source={report.funcionarios} sumField={"funcao.salarioBase"} sourceMap={element => {
                                        return (
                                            <tr>
                                                <td>{ element['nome'] }</td>
                                                <td>{ element['funcao']['nome'] }</td>
                                                <td>{ element['funcao']['salarioBase'] }</td>
                                            </tr>
                                        )
                                    }} />
                            </div>
                            <div className="row tables-row">
                                <TableCard tableTitle={"Manutenções"} header={['Data', 'Carro', 'Valor']}
                                    source={report.manutencoes} sumField={"acressimos_manutencao"} sourceMap={element => {
                                        return (
                                            <tr>
                                                <td>{ element['data_devolucao'] }</td>
                                                <td>{ element['veiculo']['modelo'] + " | " + element['veiculo']['cor'] }</td>
                                                <td>{ element['acressimos_manutencao'] }</td>
                                            </tr>
                                        )
                                    }} />
                                <TableCard tableTitle={""} header={[]} source={undefined} className={"d-invisible"} />
                            </div>
                        </div>
                    </>
                )
                )()
            }
        </ContentContainer>
    )
}

export default ExpenseReportPage