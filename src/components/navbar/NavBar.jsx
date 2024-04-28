import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState, useRef } from "react";
import google from "../../assets/images/google-symbol.png";
import github from "../../assets/images/github.png"
import { AuthContext } from "../authcontextdata/AuthContextData";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {

    const { user, loader, setLoader,  logOut, signIn, setUser, setUserData } = useContext(AuthContext);

    const navigate = useNavigate();

    const handletoRegister = () => {
        navigate('/register')
    }
    const handlethelogin = (event) => {
        setLoader(true)
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                setUser(res.user)
                setLoader(false)
                toast.success('LOG-IN SUCCESSFULL', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .cath(error => console.log(error.message))
    }


    const handlelogout = () => {
        Swal.fire({
            title: "Want To Log-Out??",
            text: "Have a Good Day!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log-Out"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => {
                        Swal.fire({
                            title: "Logged-Out",
                            text: "Bye!!",
                            icon: "success"
                        });
                        setUserData(null)
                    })

            }
        });
    }

    const navmenus = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allartandcraft">All Art & craft Items</NavLink></li>
        <li><NavLink to="/addcraftitem">Add Craft Item</NavLink></li>
        <li><NavLink to={user ? `/myartcraft/${user.email}` : "/"}>My Art&Craft List</NavLink></li>
    </>

    return (
        <div className="navbar dark:bg-base-100 bg-white border-b-2 border-black dark:border-white">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Flip
            />
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navmenus}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-1">
                    {navmenus}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    loader && <ClipLoader
                        loading={loader}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                }
                {
                    user ? <button className="btn btn-primary" onClick={handlelogout}>Log-Out</button> : <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()} >Login</button>
                }
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <>
                            <form className="card-body" onSubmit={handlethelogin} method="dialog">
                                <h3 className="text-center text-3xl font-semibold">LOG-IN</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="email"
                                        name="email"
                                        /* ref={emailRef} */
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                </div>
                                <p className="text-center">Also log-in With :</p>
                                <div className="flex justify-center gap-2">
                                    <img src={google} alt="" className="w-8 h-8 cursor-pointer border border-1 border-white rounded-full p-2" />
                                    <img src={github} alt="" className="w-8 h-8 cursor-pointer border border-1 border-white rounded-full p-1" />
                                </div>
                                <div className="form-control flex justify-center">
                                    {
                                        loader ? <ClipLoader
                                            loading={loader}
                                            size={50}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"

                                        ></ClipLoader> : user ? <button className="btn btn-primary" onClick={handlelogout}>Log-Out</button> : <input type="submit" value="Log-In" className="btn btn-primary" />
                                    }

                                </div>
                            </form>
                            <form method="dialog">
                                <div>Are You new ? <button className="text-blue-500" onClick={handletoRegister}>Register</button></div>
                            </form>
                        </>
                    </div>
                </dialog>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;