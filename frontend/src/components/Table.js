
const Table = ({ tableActions, header, children }) => {

    const getHeader = () => {
        return header && header.length > 0 ?
            <tr>
                { header.map((element) => <th>{element}</th>) }
            </tr>
            :
            ""
    };

    const getBody = () => {
        return (children && children.length) ? children : "Nenhum Item foi Encontrado"
    }

    return (
        <>
            { tableActions && tableActions() }
            <table className="table table-striped table-bordered">
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