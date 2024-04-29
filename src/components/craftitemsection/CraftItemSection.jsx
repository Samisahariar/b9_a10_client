import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { ClipLoader } from "react-spinners";
import CraftSectionCard from "../craftsectioncard/CraftSectionCard";
import { key } from "localforage";

const CraftItemSection = () => {
    const [homedata, setHomedata] = useState(null)

    const { loader, setLoader } = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/homepage')
            .then(res => res.json())
            .then(data => {
                setHomedata(data)
                setLoader(false)
            })
    }, [])

    return (
        <div>
            <h3 className="text-4xl font-semibold text-black text-center">Craft Items Section</h3>
            <div className="grid grid-cols-3 w-[90%] mx-auto gap-2">
                {
                    homedata?.map((singleCard, idx) => <CraftSectionCard singleCard={singleCard} key={idx}></CraftSectionCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemSection;