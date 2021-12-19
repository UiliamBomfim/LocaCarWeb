
const Table = ({ tableActions, header, children, className }) => {

    const getHeader = () => {
        return header && header.length > 0 ?
            <tr>
                { header.map((element) => <th>{element}</th>) }
            </tr>
            :
            ""
    };

    const getBody = () => {
        var colspan = header ? header.length : 1;
        return (children && children.length) ? children : <td colspan={colspan} className="text-center">Nenhum Item foi Encontrado</td>
    }

    return (
        <>
            { tableActions && tableActions() }
            <table className={"table table-striped " + (className ? className : "")}>
                <thead>
                    { getHeader() }
                </thead>
                <tbody>
                    { getBody() }
                </tbody>
            </table>
        </>
    )
};

export default Table