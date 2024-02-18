import React from 'react';

const CardImageHome = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='w-[450px] font-bold'>
                    <h1 className=' text-3xl'>You can selling course with teach other</h1>
                    <p className='mt-5 text-gray-500'>find your new oppurtunity, and learn much you want introduction
                        this feature allow you teach each other so they can learn the same skills they want
                    </p>
                    <button className='mt-10 w-[100%] h-10 rounded-md text-white bg-[#6558f5] hover:bg-[#7158e0]'>
                        Start Sell Course
                    </button>
                </div>
                <div className='w-[700px]'>
                    <img src="/home2.png" alt="image" className='' />
                </div>
            </div>
        </>
    );
}

export default CardImageHome;
