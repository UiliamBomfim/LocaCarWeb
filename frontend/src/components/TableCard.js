import Table from "./Table"

const TableCard = ({ tableTitle, header, source, sourceMap, sumField, className }) => {

    const getItemValue = (item, prop) => {
        var _item = item
        prop = prop.split('.')

        prop.forEach(p => {
            _item = _item[p]
        });

        return _item
    }

    return (
        <div className={"col tables-col " + (className ? className : "")}>
            <p className="table-title">{ tableTitle }</p>
            <Table  header={header}>
                {
                   source && (() => {
                        var itens = source.map(sourceMap)
                        
                        itens.push(
                            <tr>
                                <td colSpan={header.length - 1}>Total</td>
                                <td>{ source.reduce((a, b) => a + getItemValue(b, sumField), 0) }</td>
                            </tr>
                        )

                        return itens
                    })()
                }
            </Table>
        </div>
    )
}

export default TableCard