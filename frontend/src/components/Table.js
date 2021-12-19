
const Table = ({ tableActions, header, children, className }) => {

    const getHeader = () => {
        return <tr>
            {
                header && header.length > 0 ?
                    header.map((element, i) => <th key={i} >{element}</th>) :
                    undefined
            }
        </tr>
    };

    const getBody = () => {
        var colspan = header ? header.length : 1;
        return (children && children.length) ? children : <tr><td colSpan={colspan} className="text-center">Nenhum Item foi Encontrado</td></tr>
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