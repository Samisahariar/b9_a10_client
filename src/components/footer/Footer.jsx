import juteImage from "../../assets/images/jute.png"
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-[10%] dark:bg-[]">
            <aside>
            <div className="flex items-center text-3xl"><img src={juteImage} alt="" className="w-12 h-12" /><span className="text-2xl font semibold text-black font-tita dark:text-white">Jute<span className="text-[#FF204E] dark:text-[#378CE7]">Maniax</span></span></div>
                <p className="text-md font-semibold">Jute Mainx<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;