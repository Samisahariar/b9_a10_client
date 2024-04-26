import { useContext } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";

const My_Art_Craft_List = () => {

    const data = useContext(AuthContext)
    console.log(data.name)

    return (
        <div className="bg-white dark:bg-black">
            this is my art craft section
        </div>
    );
};

export default My_Art_Craft_List;