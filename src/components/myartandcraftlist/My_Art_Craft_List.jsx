import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../card/Card";
import Swal from 'sweetalert2';

const My_Art_Craft_List = () => {
    const { userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [yes, setYes] = useState(null)

    const { email } = useParams();

    useEffect(() => {
        fetch(`https://b9-a10-server-six.vercel.app/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    const handledelbutton = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9-a10-server-six.vercel.app/del/${id}`, {
                    method: 'PUT'
                })
                    .then(res => {
                        if (res.status === 200) {
                            fetch(`https://b9-a10-server-six.vercel.app/${email}`, {
                                method: 'GET'
                            })
                                .then(res => res.json())
                                .then(data => setUserData(data))
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });


                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }

    const handlededitbutton = (id) => {
        navigate(`/updatepage/${id}`)
    }

    const handlethesortby = () =>{
        const customizationYes = userData.filter((singledata) => singledata.customization === "Yes");
        setYes(customizationYes)
    }

    const handlethesortbyno = () =>{
        const customizationNo = userData.filter((singledata) => singledata.customization === "No");
        setYes(customizationNo)
    }

    const handlethesortbyall = () =>{
        setYes(userData)
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <p>Filter By Customization:</p>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handlethesortbyall()}><a>All</a></li>
                        <li onClick={() => handlethesortby()}><a>Yes</a></li>
                        <li onClick={() => handlethesortbyno()}><a>No</a></li>
                        
                    </ul>
                </div>
            </div>
            <div className="bg-white dark:bg-black mt-[5%] grid grid-cols-2 p-2 gap-2">
                {
                    !yes && userData?.map((singleData, idx) => <Card data={singleData} key={idx} handlededitbutton={handlededitbutton} handledelbutton={handledelbutton}></Card>)
                }
                {
                    yes && yes.map((singleData, idx) => <Card data={singleData} key={idx} handlededitbutton={handlededitbutton} handledelbutton={handledelbutton}></Card>)
                }
            </div>
        </div>

    );
};

export default My_Art_Craft_List;