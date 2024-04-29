import Swal from 'sweetalert2';


const Add_Craft_Item = () => {

    const handletheaddCraft = (event) => {
        event.preventDefault();
        console.log("the form is working well!!")
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
        fetch(`https://b9-a10-server-six.vercel.app/data`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem)
        })
            .then(res => {
                Swal.fire({
                    title: "Item is Added!!",
                    text: "Bye!!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="mt-[5%] p-10 bg-white dark:bg-slate-600">
            <form onSubmit={handletheaddCraft} className="space-y-2">
                <div className="flex border border-black gap-2 w-[80%] mx-auto">
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">What is your E-Mail?</span>
                        </div>
                        <input type="text" placeholder="E-Mail" className="input input-bordered w-full" name="useremail" />
                    </label>
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">What is your Name?</span>
                        </div>
                        <input type="text" placeholder="User-Name" className="input input-bordered w-full" name="username" />
                    </label>
                </div>
                <div className="flex border border-black gap-2 w-[80%] mx-auto">

                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">Photo-URL</span>
                        </div>
                        <input type="text" placeholder="Image" className="input input-bordered w-full" name="photo" />
                    </label>
                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">Rating ?</span>
                        </div>
                        <input type="text" placeholder="rating" className="input input-bordered w-full" name="rating" />
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
                        <select className="select select-bordered" name='subcategory'>
                            <option selected>Wooden Furnitures and sculptures</option>
                            <option>Wooden Home Decor</option>
                            <option>Woodrn Utensils and Kitchenare</option>
                            <option>Jute Home Decor</option>
                            <option>Jute KitchenWare and utensils</option>
                            <option>Jute and wooden jewellery</option>
                        </select>
                    </label>
                </div>
                <div className="flex border border-black gap-2 w-[80%] mx-auto">

                    <label className="form-control w-[50%]">
                        <div className="label">
                            <span className="label-text">What is the Price ?</span>
                        </div>
                        <input type="text" placeholder="price" className="input input-bordered w-full" name="price" />
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
                <div className="flex border border-black gap-2 w-[80%] mx-auto">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Description" name="description"></textarea>
                    </label>
                </div>
                <input type="submit" value="ADD" className="bg-white w-[80%] ml-[10%] mt-10 p-2 rounded-xl cursor-pointer btn" />
            </form>
        </div>
    );
};

export default Add_Craft_Item;