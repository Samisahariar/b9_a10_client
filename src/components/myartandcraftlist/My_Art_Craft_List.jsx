import { useContext, useEffect } from "react";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../card/Card";
import Swal from 'sweetalert2';

const My_Art_Craft_List = () => {
    const { user, userData, setUserData } = useContext(AuthContext);

    const { email } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/${email}`, {
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
                fetch(`http://localhost:5000/del/${id}`, {
                    method: 'PUT'
                })
                    .then(res => {
                        if (res.status === 200) {
                            fetch(`http://localhost:5000/${email}`, {
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
        console.log(id)
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