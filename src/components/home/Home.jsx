import Accordian from "../accordian/Accordian";
import Carosel from "../carosel/Carosel";
import CraftItemSection from "../craftitemsection/CraftItemSection";
import DIvider from "../divider/DIvider";

const Home = () => {
    return (
        <>
            <div className="dark:bg-base-200 bg-white">
                <Carosel></Carosel>
                <CraftItemSection></CraftItemSection>
                <DIvider></DIvider>
                <Accordian></Accordian>
            </div>
        </>
    );
};

export default Home;