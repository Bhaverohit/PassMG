import React, { useRef, useState } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })

    const showPassword = () => {
        if (ref.current.src.includes("src/assets/eye.png")) {
            ref.current.src = "src/assets/eye_hidden.png"

        } else {
            ref.current.src = "src/assets/eye.png"
        }
    }

    const savePassword = () => {
        console.log(form);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-900 opacity-20 blur-[100px]"></div></div>

            <div className="my_container">

                <h1 className='text-5xl font-bold text text-center'>

                    <span className='text-green-500'>&lt;</span>
                    Pass<span className='text-green-500'>MG/&gt;</span>

                </h1>
                <p className='text-green-900 text-center text-lg'>A Secured Password Manager At Your Service!!!</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter Website URL' onChange={handleChange} value={form.site} type="text" className='rounded-full border border-green-500 w-full py-1 p-4' id='site' name='site' />
                    <div className='flex w-full justify-between gap-8'>
                        <input placeholder='Enter Username' onChange={handleChange} value={form.username} type="text" className='rounded-full border border-green-500 w-full py-1 p-4' id='username' name='username' />
                        <div className="relative">

                            <input placeholder='Enter Password' onChange={handleChange} value={form.password} type="text" className='rounded-full border border-green-500 w-full py-1 p-4' id='password' name='password' />
                            <span className='absolute right-[4px] top-[3px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="src/assets/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex items-center justify-center bg-green-400 rounded-full px-8 py-2 w-fit gap-2 border hover:border-green-950 hover:bg-green-300'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>

                </div>

            </div>

        </>
    )
}

export default Manager