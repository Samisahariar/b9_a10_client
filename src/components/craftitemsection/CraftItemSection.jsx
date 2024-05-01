import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { ClipLoader } from "react-spinners";
import CraftSectionCard from "../craftsectioncard/CraftSectionCard";
import { key } from "localforage";

const CraftItemSection = () => {
    const [homedata, setHomedata] = useState(null)

    const { loader, setLoader } = useContext(AuthContext)

    useEffect(() => {
        setLoader(true)
        fetch('https://b9-a10-server-six.vercel.app/homepage')
            .then(res => res.json())
            .then(data => {
                setHomedata(data)
                setLoader(false)
            })
    }, [])

    return (
        <div className="mt-[10%]">
            {
                loader && <ClipLoader
                    loading={loader}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            }
            <h3 className="text-5xl text-center font-semibold text-black dark:text-white font-tita"><span className="text-[#FF204E] dark:text-[#378CE7]">Craft </span>Items Section</h3>
            <div className="grid lg:grid-cols-3 w-[90%] mx-auto gap-2 md:grid-cols-2 grid-cols-1 mt-[5%]">
                {
                    homedata?.map((singleCard, idx) => <CraftSectionCard singleCard={singleCard} key={idx}></CraftSectionCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemSection;