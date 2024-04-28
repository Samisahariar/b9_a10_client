
const CardDetails = () => {
    return (
        <div>
            <div className="keen-slider h-[50vh] relative">
                <div className="third_banner"><img  alt="" className="w-[100vw] h-[50vh] bg-center" /></div>
                <div className="hero-overlay bg-opacity-30 h-[50vh] w-full absolute top-0 flex justify-center items-center flex-col gap-3">
                    <p className="text-md text-white tracking-widest animate__animated animate__fadeInUp">San Diego Real Estate Experts</p>
                    <p className="text-xs text-white tracking-wide animate__animated animate__fadeInUp">Providing The Most Comprehensive And Distinguished Real Estate Services.</p>
                </div>
            </div>
            <div className="p-2">
                <span className="px-3 py-1 text-white bg-[#637E76] rounded-xl">For </span>
                <span className="px-3 py-1 text-white bg-[#637E76] rounded-xl ml-2">segmentname</span>
                <div className="flex md:justify-between items-center md:flex-row flex-col text-center">
                    <div>
                        <h3 className="lg:text-4xl font-semibold font-dm text-2xl md:text-3xl">title</h3>
                        <span className="flex items-center gap-2 text-xs mt-2">lopcatin</span>
                    </div>
                    <div className="">
                        <h3 className=" text-4xl font-semibold text-end font-dm">price</h3>
                        <div className="flex gap-2">
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white">Share</span>
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white">Favorite</span>
                            <span className="p-2 flex items-center gap-1 rounded-xl bg-white">Print</span>
                        </div>
                    </div>
                </div>
                <div className=" bg-white p-3 space-y-2 rounded-xl mt-10">
                    <p className="font-semibold">Overview :</p>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3">
                        <div>
                            <p>Updated On:</p>
                            <p>November 29, 2023</p>
                        </div>
                        <div>
                            <p>Categor :</p>
                            <p>segmentname</p>
                        </div>
                        <div>
                            <p>Property ID :</p>
                            <p>id</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 rounded-xl mt-10">
                    <span className="font-semibold">Description :</span><br />
                    description
                </div>
                <div className="w-[80vw]">

                </div>
            </div>
        </div>
    );
};

export default CardDetails;