import UserIcon from '../assets/Icons/user.png'
import MenuIcon from '../assets/Icons/menu.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    let isAuthenticated = false;
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav className='bg-[#ffffff]'>
            <div className="flex justify-between lg:text-lg items-center py-3 xl:py-5 font-semibold px-5 sm:px-10 relative">
                <div className='flex items-center gap-10'>
                    <Link to="/home" className='font-bold text-xl lg:text-2xl'>&lt;<span className='text-[#666666]'>Code</span>Sheet/&gt;</Link>
                    <Link to="/about" className='hover:cursor-pointer text-[#666666] hover:text-black mt-1 hidden md:block'>About Us</Link>
                    <Link to="/contact" className='hover:cursor-pointer text-[#666666] hover:text-black mt-1 hidden md:block'>Contact Us</Link>
                </div>
                <div className='flex gap-3'>
                    {isAuthenticated ? (
                        <div className="flex gap-3 md:gap-8 lg:gap-10 items-center">
                            <div className='flex items-center gap-1 md:gap-2 text-lg'>
                                <img src={UserIcon} alt="User" className='w-6 lg:w-7' />
                                Usman
                            </div>
                            <button className="p-[2px] md:p-1 min-w-20 md:min-w-24 border-black rounded-md bg-black text-white hover:bg-transparent hover:text-black hidden md:block">Log out</button>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center">
                            <Link to="/login" className="p-[2px] md:p-1 min-w-20 md:min-w-24 text-center border border-black rounded-md hover:bg-black hover:text-white">Log in</Link>
                            <Link to="/signup" className="p-[2px] md:p-1 min-w-20 md:min-w-24 text-center border border-black rounded-md bg-black text-white hover:bg-transparent hover:text-black hidden md:block">Sign up</Link>
                        </div>
                    )}
                    <img src={MenuIcon} alt="Menu" className='w-10 cursor-pointer md:hidden' onClick={() => setOpenMenu(!openMenu)} />
                </div>
                {openMenu &&
                    <div className='bg-white absolute top-14 p-2 rounded-lg right-6 w-1/2 text-[#666666] md:hidden'>
                        <ul className='space-y-2'>
                            {isAuthenticated &&
                                <>
                                    <li>Profile</li>
                                    <li>My Sheets</li>
                                </>
                            }
                            <li>About Us</li>
                            <li>Contact Us</li>
                            {isAuthenticated && <li>Log out</li>}
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar