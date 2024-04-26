import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const NavBar = () => {


    const navmenus = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allartandcraft">All Art & craft Items</NavLink></li>
        <li><NavLink to="/addcraftitem">Add Craft Item</NavLink></li>
        <li><NavLink to="/myartcraft">My Art&Craft List</NavLink></li>
    </>

    return (
        <div className="navbar dark:bg-base-100 bg-white border-b-2 border-black dark:border-white fixed top-0">
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
                <Link /* to="/login" */><button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()} >Login</button></Link>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
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