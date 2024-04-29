import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import google from "../../assets/images/google-symbol.png";
import github from "../../assets/images/github.png"
import { AuthContext } from "../authcontextdata/AuthContextData";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import juteImage from "../../assets/images/jute.png";
import "../../main.css"


const NavBar = () => {

    const { user, loader, setLoader,  logOut, signIn, setUser, setUserData, googlelogin } = useContext(AuthContext);

    const navigate = useNavigate();

   

    const handlethelogin = () =>{
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
                <div className="flex items-center"><img src={juteImage} alt="" className="w-12 h-12"/><span className="text-xl font semibold text-black font-main">JuteMania</span></div>
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
                    user ? <button className="btn btn-primary" onClick={handlelogout}>Log-Out</button> : <button className="btn" onClick={() => handlethelogin()} >Login</button>
                }
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