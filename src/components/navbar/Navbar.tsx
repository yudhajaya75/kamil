import { Button, Toast } from 'flowbite-react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { HiFire } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showToast, setShowToast] = useState(false);

    const handleToastClick = (e: any) => {
        e.stopPropagation();
    };

    return (
        <nav className='bg-[#71e6e6]'>
            <div className="mx-auto max-w-[1000px] min-h-[50px]">
                {/* search */}
                <div className="relative p-5 flex w-full flex-wrap items-center justify-between">
                    <input
                        type="search"
                        className="relative bg-white m-0 block flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />

                    <span
                        className="w-[5%] flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200">
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
                    {/* search */}
                    <div>
                        <Button onClick={() => setShowToast((state) => !state)}>Toggle toast</Button>
                        {showToast && (
                            <Toast onClick={handleToastClick}>
                                <div className="text-sm font-normal">Set yourself free.</div>
                            </Toast>
                        )}
                    </div>
                    {/* profile */}
                    <div className='relative left-10'>
                        <Link to='/profile'>
                            <Avatar src="/broken-image.jpg" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
