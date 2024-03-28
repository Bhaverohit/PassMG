import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full '>

            <div className="logo text-white text-md font-bold">
                <span className='text-green-500'>&lt;</span>
                Pass<span className='text-green-500'>MG/&gt;</span>
            </div>

            <div className='flex justify-center items-center '>
                Created with <img src="src/assets/heart.png" className='w-7 mx-2' alt="heart" /> by BhaveRohit
            </div>
        </div>
    )
}

export default Footer
