import { useContext, useEffect } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../card/Card";
import Swal from 'sweetalert2';

const My_Art_Craft_List = () => {
    const { user, userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

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

    return (
        <div className="bg-white dark:bg-black mt-[5%] grid grid-cols-2 p-2 gap-2">
            {
                userData?.map((singleData, idx) => <Card data={singleData} key={idx} handlededitbutton={handlededitbutton} handledelbutton={handledelbutton}></Card>)
            }
        </div>
    );
};

export default My_Art_Craft_List;