import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const CraftSectionCard = ({ singleCard }) => {

    const navigate = useNavigate()

    const { customization, description, itemname, photo, price, processingtime, rating, stockstatus, subcategory, _id } = singleCard
    
    const handleviewdetails = (id) => {
        navigate(`/craftSection/${id}`)
    }

    const slicedDes = description?.slice(1, 100);

    return (
        <div className="card card-compact md:w-[27.5vw] bg-base-100 shadow-xl w-[250px] mx-auto">
            <figure className="h-[35vh]"><img src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemname}</h2>
                <p className="text-xs text-[#878787]">{slicedDes}...See More</p>
                <hr />
                <div className="flex gap-3">
                    <span className="flex items-center gap-1"><FaRegClock />{processingtime}</span>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary bg-[#0BE58A] text-black rounded-full border-0 hover:border-4 hover:border-[#0BE58A] hover:text-black hover:bg-[transparent]" onClick={() => handleviewdetails(_id)}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CraftSectionCard;