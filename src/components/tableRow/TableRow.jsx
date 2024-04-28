import { Link } from "react-router-dom";


const TableRow = ({ tableRowData, number }) => {

    const { customization, description, itemname, photo, price, processingtime, rating, stockstatus, subcategory, _id } = tableRowData

    return (
        <tr>
            <th>{number+1}</th>
            <td>{itemname}</td>
            <td>{processingtime}</td>
            <td>{rating}</td>
            <td>{stockstatus}</td>
            <td>{customization}</td>
            <td><Link to={`/carddetails/${_id}`}><span>View Details</span></Link></td>
        </tr>
    );
};

export default TableRow;