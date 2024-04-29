import Carosel from "../carosel/Carosel";
import CraftItemSection from "../craftitemsection/CraftItemSection";

const Home = () => {
    return (
        <>
            <div className="p-10 dark:bg-slate-600 bg-white">
                <Carosel></Carosel>
                <CraftItemSection></CraftItemSection>
            </div>
        </>
    );
};

export default Home;