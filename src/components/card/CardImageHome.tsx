import React from 'react';
import Back from '../button/Back';
import { BsChevronLeft } from 'react-icons/bs';

const CardImageHome = () => {
    return (
        <>
            <div>
                <Back
                    firstElement={
                        <>
                            <div>
                                <a href='/login'>
                                    <div className='flex items-center text-2xl pt-10 pl-10'>
                                        <BsChevronLeft />
                                        <p> Back</p>
                                    </div>
                                </a>
                            </div>
                        </>
                    } />
            </div>
            <div className='flex justify-center items-center ml-20'>
                <div className='w-[700px]'>
                    <img src="/home.png" alt="image" className='' />
                </div>
                <div className='w-[400px] font-bold'>
                    <h1 className=' text-3xl'>You can swap skill for free</h1>
                    <p className='mt-5 text-gray-500'>introduction this feature allow you teach each other so they can learn the same skills they want
                        find your new oppurtunity, and learn much you want
                    </p>
                    <a href="/swaprecomen">
                        <button className='mt-10 w-[100%] h-10 rounded-md text-white bg-[#6558f5] hover:bg-[#7158e0]'>
                            Request Swap Skill
                        </button>
                    </a>
                </div>
            </div>
            <p className='text-center text-3xl font-bold'>OR</p>
        </>
    );
}

export default CardImageHome;
