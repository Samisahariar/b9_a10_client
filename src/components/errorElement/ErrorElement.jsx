import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="text-4xl font-semibold">
            404 not found in this page
            <Link to="/"><button className="p-2 text-md font-semibold ">Go Back</button></Link>
        </div>
    );
};

export default ErrorElement;