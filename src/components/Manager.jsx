import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4, v4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([]);
    const passRef = useRef();

    useEffect(() => {
        let passwords = localStorage.getItem("password")

        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const showPassword = () => {
        passRef.current.type = "text"
        if (ref.current.src.includes("src/assets/eye.png")) {
            ref.current.src = "src/assets/eye_hidden.png"
            passRef.current.type = "text"
        } else {
            ref.current.src = "src/assets/eye.png"
            passRef.current.type = "password"
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            setForm({
                site: "",
                username: "",
                password: ""
            });
            console.log(passwordArray);
        }
        else {
            // FIXME: Create feature to show error on empty fields & less characters
            // FIXME: add a toast here {Error : Can't save empty password}
        }

    }


    const handleEdit = (id) => {
        // BUG : Clicking on edit button multiple times removing all passwords available
        // FEATURE: Create a confirm component which asks before deleting a password
        console.log("Editing ", id);
        setForm(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }


    const handleDelete = (id) => {
        console.log("Deleting ", id);
        setPasswordArray(passwordArray.filter(item => item.id !== id));
        localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)));
    }


    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text, data) => {
        toast(data + ' copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>

            {/* On this website do the open source contribution */}
            {/* Replace this library with react hot toast */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />


            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-900 opacity-20 blur-[100px]"></div></div>

            <div className="p-2 md:p-0 md:my_container min-h-[86.2vh]">

                <h1 className='text-5xl font-bold text text-center'>

                    <span className='text-green-500'>&lt;</span>
                    Pass<span className='text-green-500'>MG/&gt;</span>

                </h1>
                <p className='text-green-900 text-center text-lg'>A Secured Password Manager At Your Service!!!</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter Website URL' onChange={handleChange} value={form.site} type="text" className='rounded-full border border-green-500 w-full py-1 p-4' id='site' name='site' />
                    <div className='flex flex-col md:flex-row w-full justify-between gap-8'>
                        <input placeholder='Enter Username' onChange={handleChange} value={form.username} type="text" className='rounded-full border border-green-500 w-full py-1 p-4' id='username' name='username' />
                        <div className="relative">

                            <input ref={passRef} placeholder='Enter Password' onChange={handleChange} value={form.password} type="password" className='rounded-full border border-green-500 w-full py-1 p-4' id='password' name='password' />
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


                <div className="passwords">

                    <h2 className='text-center text-2xl mt-5 mb-4 text-green-700 font-bold'>Your Passwords</h2>

                    {passwordArray.length === 0 && <div className='text-center'>No Passwords To Show</div>}
                    {passwordArray.length !== 0 &&
                        <table className='table-auto w-full text-center rounded-xl overflow-hidden mb-10'>
                            <thead className='bg-green-800 text-white'>
                                <tr className='font-bold'>
                                    <th className='py-1.5'>Website</th>
                                    <th className='py-1.5'>Username</th>
                                    <th className='py-1.5'>Password</th>
                                    <th className='py-1.5'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-1.5 text-green-950 border border-white text-center'>
                                            <div className='flex items-center justify-center gap-5'>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='size-7 hover:cursor-pointer p-1' onClick={() => copyText(item.site, "Website")}>
                                                    <img src="src/assets/copy.png" alt="copy" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-1.5 text-green-950 border border-white text-center'>
                                            <div className='flex items-center justify-center gap-5'>
                                                {item.username}
                                                <div className='size-7 hover:cursor-pointer p-1' onClick={() => copyText(item.username, "Username")}>
                                                    <img src="src/assets/copy.png" alt="copy" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-1.5 text-green-950 border border-white text-center'>
                                            <div className='flex items-center justify-center gap-5'>
                                                {item.password}
                                                <div className='size-7 hover:cursor-pointer p-1' onClick={() => copyText(item.password, "Password")}>
                                                    <img src="src/assets/copy.png" alt="copy" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-1.5 text-green-950 border border-white text-center'>
                                            <div className='flex justify-center items-center gap-3'>
                                                <span onClick={() => handleEdit(item.id)}><img src="src/assets/edit.png" alt="edit" width={20} /></span>
                                                <span onClick={() => handleDelete(item.id)}><img src="src/assets/remove.png" alt="delete" width={20} /></span>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }
                </div>

            </div>

        </>
    )
}

export default Manager
