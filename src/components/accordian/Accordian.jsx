
const Accordian = () => {
    return (
        <div className="mt-[10%] w-[80%] mx-auto">
            <h3 className="font-tita font-semibold text-5xl text-center text-black dark:text-white"><span className="text-[#FF204E] dark:text-[#378CE7]">Frequently </span>Asked Questions</h3>
            <div className="collapse collapse-plus dark:bg-base-200 bg-white text-black dark:text-white mt-[5%] shadow-xl">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    How can I contact you?
                </div>
                <div className="collapse-content">
                    <p>You can reach out to us through the contact form available on our website. Simply fill in your details and message, and we'll get back to you as soon as possible.</p>
                </div>
            </div>
            <div className="collapse collapse-plus dark:bg-base-200 bg-white text-black dark:text-white mt-[5%] shadow-xl">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Are there any membership or subscription fees?
                </div>
                <div className="collapse-content">
                    <p>No, our website is completely free to access. You don't need to pay any membership or subscription fees to enjoy our content.</p>
                </div>
            </div>
            <div className="collapse collapse-plus dark:bg-base-200 bg-white text-black dark:text-white mt-[5%] shadow-xl">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How often do you update your content?
                </div>
                <div className="collapse-content">
                    <p>We strive to update our content regularly to provide fresh and relevant information to our audience. You can expect new articles, guides, and updates on a [daily/weekly/monthly] basis.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;