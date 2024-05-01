import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../authcontextdata/AuthContextData';


const UpDatePage = () => {

    const { id } = useParams()

    const { user } = useContext(AuthContext);

    const handletheUpdateCraft = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.useremail.value;
        const username = form.username.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const itemname = form.itemname.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const processingtime = form.processingtime.value;
        const stockstatus = form.stockstatus.value;
        const description = form.description.value;
        const newItem = { email, username, photo, rating, itemname, subcategory, price, customization, processingtime, stockstatus, description }
        fetch(`https://b9-a10-server-six.vercel.app/updatepage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })

            .then(res => {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "This Item Is Updated!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.error(error))

    }


    return (
        <div className="p-10 bg-white dark:bg-base-200">
            <h3 className='text-center text-4xl font-semibold'>Up-Date Any Data!!!</h3>
            <form onSubmit={handletheUpdateCraft} className="space-y-2">
                <div className="flex gap-2 w-[80%] mx-auto">
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">What is your E-Mail?</span>
                        </div>
                        <input type="text" placeholder="E-Mail" className="input input-bordered w-full" name="useremail" defaultValue={user?.email} readOnly />
                    </label>
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">What is your Name?</span>
                        </div>
                        <input type="text" placeholder="User-Name" className="input input-bordered w-full" name="username" required />
                    </label>
                </div>
                <div className="flex gap-2 w-[80%] mx-auto">
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">Photo-URL</span>
                        </div>
                        <input type="text" placeholder="Image" className="input input-bordered w-full" name="photo" required />
                    </label>
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">Rating ?</span>
                        </div>
                        <input type="text" placeholder="rating" className="input input-bordered w-full" name="rating" required />
                    </label>
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">Item-Name</span>
                        </div>
                        <input type="text" placeholder="Item-name" className="input input-bordered w-full" name="itemname" required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Sub-Category</span>
                        </div>
                        <select className="select select-bordered" name='subcategory' required>
                            <option selected>Wooden Furnitures and sculptures</option>
                            <option>Wooden Home Decor</option>
                            <option>Woodrn Utensils and Kitchenare</option>
                            <option>Jute Home Decor</option>
                            <option>Jute KitchenWare and utensils</option>
                            <option>Jute and wooden jewellery</option>
                        </select>
                    </label>
                </div>
                <div className="flex gap-2 w-[80%] mx-auto">

                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">What is the Price ?</span>
                        </div>
                        <input type="text" placeholder="price" className="input input-bordered w-full" name="price" required />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Customization</span>

                        </div>
                        <select className="select select-bordered" name='customization'>
                            <option selected>Yes</option>
                            <option>No</option>
                        </select>
                    </label>
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">Processing Time ?</span>
                        </div>
                        <input type="text" placeholder="time" className="input input-bordered w-full" name="processingtime" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">What is the stock status?</span>
                        </div>
                        <select className="select select-bordered" name='stockstatus'>
                            <option selected>In Stock</option>
                            <option>Made To Order</option>
                        </select>
                    </label>
                </div>
                <div className="flex gap-2 w-[80%] mx-auto">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Description" name="description"></textarea>
                    </label>
                </div>
                <input type="submit" value="UPDATE" className="bg-white w-[80%] ml-[10%] mt-10 p-2 rounded-xl cursor-pointer btn" />
            </form>
        </div>
    );
};

export default UpDatePage;