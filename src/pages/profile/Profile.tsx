import React, { useState } from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTab, setSelectedTab] = useState('My Profile');
    const [isVisible, setIsVisible] = useState(false);

    const handleMyProfileClick = () => {
        setSelectedTab('My Profile');
    };

    const handleChangePasswordClick = () => {
        setSelectedTab('Change Password');
    };

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className='flex flex-row'>
                <Link to='/home'>
                    <div className='flex items-center text-2xl pt-10 pl-10'>
                        <BsChevronLeft />
                        <p> Back</p>
                    </div>
                </Link>
            </div>
            <div className='max-w-auto mx-[200px] relative flex flex-row justify-between items-center'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row justify-between items-center mb-4'>
                        <div className='flex flex-col items-center'>
                            <label htmlFor="upload-photo" className="cursor-pointer">
                                <img src="/avatar.png" className='w-[150px]' alt="" />
                                <p className="">Upload Photo</p>
                            </label>
                            <input
                                type="file"
                                id="upload-photo"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className='border-l-2 border-gray-500 w-full pl-4'>
                            <div className='flex flex-row gap-4 mb-4'>
                                <button
                                    className={`px-4 py-2 rounded-md border-2 border-gray-300 ${selectedTab === 'My Profile' ? 'bg-gray-200 font-bold' : ''}`}
                                    onClick={handleMyProfileClick}
                                >
                                    My Profile
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-md border-2 border-gray-300 ${selectedTab === 'Change Password' ? 'bg-gray-200 font-bold' : ''}`}
                                    onClick={handleChangePasswordClick}
                                >
                                    Change Password
                                </button>
                            </div>
                            {selectedTab === 'My Profile' && (
                                <div>
                                    {/* name */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                            required
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                            required
                                        />
                                    </div>
                                    {/* Birth Year */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Birth Year
                                        </label>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker className="border-2 p-3 rounded-md w-full" />
                                        </LocalizationProvider>
                                    </div>
                                    {/* Address */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Address
                                        </label>
                                        <textarea
                                            className="resize rounded-md border-2 p-3 w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                            placeholder="Address...">
                                        </textarea>
                                    </div>
                                    {/* gender */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Gender
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Gender"
                                            className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className='flex justify-center'>
                                        <Link to={"/home"}>
                                            <button
                                                type="submit"
                                                className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                                            >
                                                Change Profile
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {selectedTab === 'Change Password' && (
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Current Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={isVisible ? "text" : "password"}
                                                placeholder="Current Password"
                                                className="border-2 p-3 rounded-md w-full hover:border-black/[.5] focus:border-black/[.5] focus:outline-none"
                                                required
                                            />
                                            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                                <div onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <AiOutlineEyeInvisible size={20} />
                                                    ) : (
                                                        <AiOutlineEye size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            New Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={isVisible ? "text" : "password"}
                                                placeholder="New Password"
                                                className="border-2 p-3 rounded-md w-full hover:border-black/[.5] focus:border-black/[.5] focus:outline-none"
                                                required
                                            />
                                            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                                <div onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <AiOutlineEyeInvisible size={20} />
                                                    ) : (
                                                        <AiOutlineEye size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="text" className="font-medium">
                                            Reenter Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={isVisible ? "text" : "password"}
                                                placeholder="Reenter Password"
                                                className="border-2 p-3 rounded-md w-full hover:border-black/[.5] focus:border-black/[.5] focus:outline-none"
                                                required
                                            />
                                            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                                <div onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <AiOutlineEyeInvisible size={20} />
                                                    ) : (
                                                        <AiOutlineEye size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <Link to={"/home"}>
                                            <button
                                                type="submit"
                                                className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                                            >
                                                Change Password
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
