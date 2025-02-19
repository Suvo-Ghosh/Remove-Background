import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../context/AppContext'

function Navbar() {
    const { openSignIn } = useClerk()
    const { isSignedIn, user } = useUser()
    const { credit, loadCreditsData } = useContext(AppContext)

    useEffect(() => {
        if (isSignedIn) {
            loadCreditsData();
        }
    }, [isSignedIn])

    return (
        <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
            <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="logo" /></Link>
            {
                isSignedIn
                    ? <div className='flex items-center gap-2 sm:gap-3'>
                        <button className='flex items-center gap-2 bg-blue-100 px-4 py-2 sm:px-7 sm:py-2.5 text-sm rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-4' src={assets.credit_icon} alt="credit" />
                            <p className='text-gray-600 text-xs sm:text-sm font-medium'>Credits : {credit}</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden text-xs sm:text-sm font-medium'> Hii,{user.fullName}</p>
                        <UserButton></UserButton>
                    </div>
                    : <button onClick={() => openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
                        Get Started <img src={assets.arrow_icon} alt="arrow" />
                    </button>
            }
        </div>
    )
}

export default Navbar