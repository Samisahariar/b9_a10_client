import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const CraftSectionCard = ({ singleCard }) => {

    const navigate = useNavigate()

    const { customization, description, itemname, photo, price, processingtime, rating, stockstatus, subcategory, _id } = singleCard

    const handleviewdetails = (subcategory) => {
        navigate(`/craftSection/${subcategory}`)
    }

    const slicedDes = description?.slice(1, 100);

    return (
        <div className="card card-compact md:w-[27.5vw] dark:bg-base-100 shadow-xl w-[250px] mx-auto cursor-pointer bg-white dark:text-white text-black" onClick={() => handleviewdetails(subcategory)}>
            <figure className="h-[35vh]"><img src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{subcategory}</h2>
                <p className="text-xs text-[#878787]">{slicedDes}...See More</p>
                <hr />
                <div className="flex gap-3">
                    <span className="flex items-center gap-1"><FaRegClock />{processingtime}</span>
                </div>
            </div>
        </div>
    );
};

export default CraftSectionCard;