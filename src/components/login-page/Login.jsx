import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import google from "../../assets/images/google-symbol.png";
import github from "../../assets/images/github.png"
import { useContext } from 'react';
import { AuthContext } from '../authcontextdata/AuthContextData';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate()

    const { user, loader, setLoader, logOut, signIn, setUser, setUserData, googlelogin, gitlogin } = useContext(AuthContext);

    const handlethegoogle = () =>{
        setLoader(true)
        googlelogin()
        .then(res => {
            console.log("login success")
            setLoader(false)
        })
        .catch(error => console.log(error.message))
    }

    const handlethegitlogin = () =>{
        setLoader(true)
        gitlogin()
        .then(res => {
            console.log("git login sucessfulll!!!")
        })
        .catch(error => console.log(error))
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
    const handletoRegister = () => {
        navigate('/register')
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
    return (
        <div>
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
                    <p className="text-center">Also log-in With :</p>
                    <div className="flex justify-center gap-2">
                        <img src={google} alt="" className="w-8 h-8 cursor-pointer border border-1 border-white rounded-full p-2" onClick={() => handlethegoogle()}/>
                        <img src={github} alt="" className="w-8 h-8 cursor-pointer border border-1 border-white rounded-full p-1" onClick={ () => handlethegitlogin()}/>
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
                </div>

            </form>
            <div>Are You new ? <button className="text-blue-500" onClick={handletoRegister}>Register</button></div>
        </div>
    );
};

export default Login;