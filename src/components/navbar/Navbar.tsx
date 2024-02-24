import { Button, Toast } from 'flowbite-react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { BiSolidBellRing } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [showToast, setShowToast] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [notificationCount, setNotificationCount] = useState(3);


    const handleSearch = () => {
        navigate(`/search/${searchQuery}`);
    };

    const handleToastClick = () => {
        setShowToast(false);
    };

    const closeToast = () => {
        setNotificationCount(0);
        setShowToast(false);
    };


    return (
        <nav className='bg-[#2eb5c0]'>
            <div className="mx-auto max-w-[1000px] min-h-[50px]">
                <div className="relative p-5 flex w-full flex-wrap items-center justify-between">
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        className="relative bg-white m-0 block flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />

                    <span
                        onClick={handleSearch}
                        className="w-[5%] flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-black">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg>
                    </span>

                    <div>
                        <Button onClick={() => setShowToast(prevState => !prevState)}>
                            <BiSolidBellRing />
                            {notificationCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs">{notificationCount}</span>
                            )}
                        </Button>
                        {showToast && (
                            <div className="absolute w-[30%] font-normal mt-7 flex flex-col">
                                <Toast onClick={handleToastClick}>
                                    <div className='flex flex-col gap-1'>
                                        <p className='py-2 px-2 bg-white rounded-lg border-2 text-black text-sm'>Welcome Riqki</p>
                                        <p className='py-2 px-2 bg-white rounded-lg border-2 text-black text-sm'>Anda ditunggu untuk swap skill. ayo sekarang keburu hilang</p>
                                        <p className='py-2 px-2 bg-white rounded-lg border-2 text-black text-sm'>Jangan lupa untuk belajar</p>
                                        <button onClick={closeToast}>Close</button>
                                    </div>
                                </Toast>
                            </div>
                        )}
                    </div>

                    <div className='relative left-10 flex justify-center items-center gap-2'>
                        <p>Hi, Riqki</p>
                        <a href='/profile'>
                            <Avatar src="/broken-image.jpg" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
