import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../authcontextdata/AuthContextData";
import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';


const Register = () => {
    const [show, setShow] = useState(false);
    /* const [error, setError] = useState(null) */
    const { setUser, createUser, loader, setLoader, logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const tohomepage = () => {
        navigate("/login")
    }

    const tothelogin = () =>{
        navigate("/login")
    }

    const handleSubmitRegister = (event) => {
        setLoader(true)
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const checked = form.checkbox.value;
        createUser(email, password)
            .then(res => {
                setUser(null)
                logOut()
                    .then(res => {
                        setLoader(false)
                        setTimeout(
                            () => {
                                tohomepage()
                            }
                            , 2000)
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: "Registration Successfull!!",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                setLoader(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
        /* setUser(null)
        createUser() */

    }
    return (
        <div className="bg-white dark:bg-slate-600">
            <form className="card-body mt-[5%] bg-white dark:bg-slate-600 w-[80%] mx-auto" onSubmit={handleSubmitRegister}>
                <h3 className="text-4xl text-center font-semibold">REGISTER</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User-Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" required name="username" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required name="password" />
                    <span onClick={() => setShow(!show)} className="absolute right-3 cursor-pointer text-xl bottom-[20%]">{!show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                </div>
                <div className="gap-2 flex">
                    <input type="checkbox" name="checkbox" />
                    <span>Accept all the terms and condition</span>
                </div>
                {
                    loader && <ClipLoader
                        loading={loader}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                }

                {/* {
                    error && <p className="text-red-600">{error}</p>
                } */}
                <p>Already Have An Account ? <span className="text-blue-600 cursor-pointer" onClick={() => tothelogin()}>Login</span></p>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;