import { useParams } from "react-router-dom";

const AllArtAndCraft = () => {

    const email = useParams();
    console.log(email)

    return (
        <div>
            This is the all art and craft section!!!
        </div>
    );
};

export default AllArtAndCraft;