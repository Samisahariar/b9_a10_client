import { IoIosPricetag } from "react-icons/io";
import { IoTimerSharp } from "react-icons/io5";
import { FaHammer } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { CgDetailsMore } from "react-icons/cg";

const Card = ({ data, handlededitbutton, handledelbutton }) => {
    const navigate = useNavigate()

    const { customization, description, itemname, photo, price, processingtime, rating, stockstatus, subcategory, _id } = data
    const slicedDes = description.slice(1, 80);

    const { userData, setUserData } = useContext(AuthContext)

    const tothecarddetails = (id) => {
        navigate(`/carddetails/${id}`)
    }

    return (
        <div className="card card-side dark:bg-base-100  cursor-pointer bg-white text-black border-1 border shadow-xl dark:text-white">
            <div className="w-[40%]"><img src={photo} alt="Movie" className="rounded-xl bg-cover" /></div>
            <div className=" flex justify-between border-white border w-[60%] items-center">
                <div className=" space-y-1 p-1">
                    <h2 className="text-xl font-semibold">{itemname}</h2>
                    <span className="text-xs">#{subcategory}</span>
                    <div className="flex gap-5">
                        <span className="flex items-center text-md gap-1"><IoIosPricetag />{price}</span>
                        <span className="flex items-center text-md gap-1"><IoTimerSharp />{processingtime}</span>
                        <span className="flex items-center text-md gap-1"><FaHammer />{customization}</span>
                    </div>
                    <div>
                        <p className="text-xs">{slicedDes}...See More</p>
                    </div>
                    <div className="flex gap-5">
                        <span className="flex items-center text-md gap-1"><FcRating />{rating}</span>
                        <span className="flex items-center text-md gap-1"><IoTimerSharp />{processingtime}</span>
                    </div>

                </div>
                <div className="join join-vertical gap-1">
                    <button className="btn text-xl dark:bg-[#378CE7] bg-[]" onClick={() => handlededitbutton(_id)}><MdEditSquare /></button>
                    <button className="btn text-xl" onClick={() =>handledelbutton(_id)}><MdDeleteForever /></button>
                    <button className="btn text-xl" onClick={() =>tothecarddetails(_id)}><CgDetailsMore /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;