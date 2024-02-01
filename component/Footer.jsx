import { FaInstagram, FaFacebook , FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <section>
                <footer className="footer p-10 bg-slate-600 md:items-center flex flex-row flex-wrap md:justify-around sm:justify-between text-base-content pb-10 font-Baskervville">

                    <nav className="text-white font-Baskervville">
                        {/* <header className="footer-title ml-4">Details</header> */}

                        <img src="/Logo/MainLogo.jpg" alt='Image' className="h-24 w-24 rounded-full" ></img>
                        <div className= " bg-slate-600 mt-3 flex ">
                            <button target="_blank " src="" className="pr-1">
                            <FaInstagram  size={25} color="black"  className="hover:bg-slate-600"/>
                            </button>
                            <button target="_blank " src="" className="pr-1">
                            <FaFacebook  size={25} color="black"  className="hover:bg-slate-600"/>
                            </button>
                            <button target="_blank " src="">
                            <FaGithub  size={25} color="black"  className="hover:bg-slate-600"/>
                            </button>
                           
                            </div>


                    </nav>
                    <nav className="text-white font-Baskervville">
                        <header className="footer-title">Services</header>
                        <a className="link link-hover font-serif font-medium">Branding</a>
                        <a className="link link-hover font-serif font-medium">Design</a>
                        <a className="link link-hover font-serif font-medium text-base  ">Marketing</a>
                        <a className="link link-hover font-serif font-medium text-base ">Advertisement</a>
                    </nav>
                    <nav className="text-white font-Baskervville sm:-mt-3">
                        <header className="footer-title">Company</header>
                        <a className="link link-hover font-serif font-medium text-base ">About us</a>
                        <a className="link link-hover font-serif font-medium text-base ">Contact</a>
                        <a className="link link-hover font-serif font-medium text-base ">Jobs</a>
                        <a className="link link-hover font-serif font-medium text-base ">Press kit</a>
                    </nav>
                    <nav className="text-white font-Baskervville">
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover font-serif font-medium text-base ">Terms of use</a>
                        <a className="link link-hover font-serif font-medium text-base ">Privacy policy</a>
                        <a className="link link-hover font-serif font-medium text-base ">Cookie policy</a>
                    </nav>
                    <nav>
                    
                        <header className="footer-title text-white font-Baskervville ">Newsletter</header>
                        <fieldset className=" md:w-80 sm:w-40 ">
                            <label className="label">
                                <span className="label-text font-serif font-medium text-base">Enter your email address</span>
                            </label>
                            <div className="join -ml-10">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item font-serif font-medium text-base">Subscribe</button>
                            </div>
                            <div>
                                <label className="cursor-pointer label flex flex-row ">
                                    <span className="label-text-alt font-serif font-medium text-base">Developed By:-   
                                    <a href="https://www.linkedin.com/in/harsh-gupta137/" target='_blank' className="link link-hover pr-5">@harsh_gupta </a>
                                     <a href="https://www.linkedin.com/in/aashir-zayd-b28136275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="link link-hover">@Aashir_Zayd</a></span>

                                </label>
                            </div>
                        </fieldset>
                
                    </nav>
                    

                </footer>
                
                
            </section>
        </div>
    )
}
