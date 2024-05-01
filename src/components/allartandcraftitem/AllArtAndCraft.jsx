import { Link, useLoaderData, useParams } from "react-router-dom";
import TableRow from "../tableRow/TableRow";

const AllArtAndCraft = () => {

    const alldata = useLoaderData()

    return (
        <div className="overflow-x-auto dark:bg-base-200 bg-white lg:px-[10%] md:px-[5%] px-[2%]">
            <h3 className="text-4xl text-center dark:text-white text-black mt-[2%]">All the items are <span className="text-[#FF204E] dark:text-[#378CE7]">listed below</span></h3>
            <table className="table table-zebra mt-[5%]">
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