
const DIvider = () => {
    return (
        <div className="mt-[10%]">
            <h3 className="text-5xl text-center font-semibold font-tita text-black dark:text-white">Our <span className="text-[#FF204E] dark:text-[#378CE7]">Best</span> Products</h3>
            <div className="flex flex-col w-[90%] lg:flex-row mx-auto h-[40vh] rounded-xl mt-[5%]">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-xl place-items-center shadow-xl"><img src="https://i.ibb.co/9NsKqfD/photo-1504624720567-64a41aa25d70-q-80-w-1476-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="bg-contain h-[40vh] w-[100%] rounded-xl" /></div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center shadow-xl"><img src="https://i.ibb.co/ChprmS2/photo-1551371669-99df523c8850-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" alt="" className="bg-contain h-[40vh] w-[100%] rounded-xl" /></div>
            </div>
        </div>
    );
};

export default DIvider;