import { Link, useLoaderData, useParams } from "react-router-dom";
import TableRow from "../tableRow/TableRow";

const AllArtAndCraft = () => {

    const alldata = useLoaderData()

    return (
        <div className="overflow-x-auto mt-[6%]">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Item-Name</th>
                        <th>Processing Time</th>
                        <th>Rating</th>
                        <th>Customization</th>
                        <th>Stock Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        alldata.map((singleRow, idx) => <TableRow tableRowData={singleRow} key={idx} number={idx}></TableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllArtAndCraft;