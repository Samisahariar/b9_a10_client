import { useContext } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../card/Card";

const My_Art_Craft_List = () => {

    const { user } = useContext(AuthContext);

    const userData1 = useLoaderData()
    const params = useParams();

    return (
        <div className="bg-white dark:bg-black mt-[5%] grid grid-cols-2 p-2 gap-2">
            {
                userData1.map((singleData, idx) => <Card data={singleData} key={idx}></Card>)
            }
        </div>
    );
};

export default My_Art_Craft_List;