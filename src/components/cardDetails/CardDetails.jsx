import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const CardDetails = () => {


    const data = useLoaderData()
    const { customization, description, itemname, photo, price, processingtime, rating, stockstatus, subcategory, _id } = data

    return (
        <div className="dark:bg-base-200 bg-white text-black dark:text-white">
            <div className="keen-slider h-[50vh] relative">
                <div className="third_banner"><img src={photo} alt="" className="w-[100vw] h-[50vh] bg-center" /></div>
                <div className="hero-overlay bg-opacity-30 h-[50vh] w-full absolute top-0 flex justify-center items-center flex-col gap-3">
                    <p className="text-3xl text-white tracking-widest animate__animated animate__fadeInUp">{itemname}</p>
                </div>
            </div>
            <div className="p-2">
                <span className="px-3 py-1 text-white bg-[#FF204E] rounded-xl ml-2 dark:bg-[#378CE7] dark:text-black">#{subcategory}</span>
                <div className="flex md:justify-between items-center md:flex-row flex-col text-center">
                    <div>
                        <h3 className="lg:text-4xl font-semibold font-dm text-2xl md:text-3xl">{itemname}</h3>
                    </div>
                    <div className="">
                        <h3 className=" text-4xl font-semibold text-end font-dm">${price}</h3>
                        <div className="flex gap-2">
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white"><FaShareAlt></FaShareAlt>Share</span>
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white"><MdFavoriteBorder></MdFavoriteBorder>Favorite</span>
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white"><IoMdPrint></IoMdPrint>Print</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 space-y-2 rounded-xl mt-10 shadow-xl dark:bg-base-200">
                    <p className="font-semibold">Overview :</p>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3">
                        <div>
                            <p>Updated On:</p>
                            <p>November 29, 2023</p>
                        </div>
                        <div>
                            <p>Customization :</p>
                            <p>{customization}</p>
                        </div>
                        <div>
                            <p>Processing Time :</p>
                            <p>{processingtime}</p>
                        </div>
                        <div>
                            <p>Rating :</p>
                            <p className="flex items-center gap-1"><FcRating></FcRating>{rating}</p>
                        </div>
                        <div>
                            <p>Stock Status :</p>
                            <p>{stockstatus}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 rounded-xl mt-10 dark:bg-base-200">
                    <span className="font-semibold">Description :</span><br />
                    {description}
                </div>
                <div className="w-[80vw]">

                </div>
            </div>
        </div>
    );
};

export default CardDetails;