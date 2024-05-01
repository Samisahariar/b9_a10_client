import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import google from "../../assets/images/google-symbol.png";
import github from "../../assets/images/github.png"
import { AuthContext } from "../authcontextdata/AuthContextData";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import juteImage from "../../assets/images/jute.png"
import "../../main.css";
import "../../App.css";
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'


const NavBar = () => {

    const { user, loader, setLoader, logOut, signIn, setUser, setUserData, googlelogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);



    const handlethelogin = () => {
        navigate('/login')
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
    };

    const darkmode = (checked) => {
        console.log(checked)
        const thewholehtml = document.getElementById("html")
        if (!checked) {
            thewholehtml.classList.add("dark")
        } else {
            thewholehtml.classList.remove("dark")
        }
    }
    console.log(user)

    const navmenus = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allartandcraft">All Art & craft Items</NavLink></li>
        <li><NavLink to="/addcraftitem">Add Craft Item</NavLink></li>
        <li><NavLink to={`/myartcraft/${user?.email}`}>My Art&Craft List</NavLink></li>
    </>

    return (
        <div className="navbar dark:bg-base-100 bg-white border-b-4 border-[#FF204E] dark:border-[#378CE7]">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52">
                        {navmenus}
                    </ul>
                </div>
                <div className="flex items-center"><img src={juteImage} alt="" className="w-12 h-12" /><span className="text-xl font semibold text-black font-tita dark:text-white">Jute<span className="text-[#FF204E] dark:text-[#378CE7]">Maniax</span></span></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-1">
                    {navmenus}
                </ul>
            </div>
            <div className="navbar-end">
                <Tooltip id="my-tooltip"/>
                <HeartSwitch
                    size="lg"
                    inactiveTrackFillColor="#cffafe"
                    inactiveTrackStrokeColor="#22d3ee"
                    activeTrackFillColor="#06b6d4"
                    activeTrackStrokeColor="#0891b2"
                    inactiveThumbColor="#ecfeff"
                    activeThumbColor="#ecfeff"
                    checked={checked}
                    onChange={(event) => {
                        setChecked(event.target.checked)
                        darkmode(checked)
                    }}></HeartSwitch>
                {
                    loader && <ClipLoader
                        loading={loader}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                }
                {
                    user ? <button className="btn btn-primary bg-[#FF204E] text-white" onClick={handlelogout}>Log-Out</button> : <button className="btn bg-[#FF204E] text-white border-0 dark:bg-[#378CE7]" onClick={() => handlethelogin()} >Login</button>
                }
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" data-tooltip-id="my-tooltip" data-tooltip-content={user && user.email} data-tooltip-place="bottom">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;