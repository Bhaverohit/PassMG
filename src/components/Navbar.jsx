import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="flex justify-between items-center px-4 h-14 py-5 my_container">

                <div className="logo text-white text-3xl font-bold">
                    <span className='text-green-500'>&lt;</span>
                    Pass<span className='text-green-500'>MG/&gt;</span>
                </div>

                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
