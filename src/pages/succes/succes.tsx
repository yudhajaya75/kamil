import React from 'react'
import Back from '../../components/button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import GlobalLayoutWithNavbar from '../../layouts/GlobalLayoutWithNavbar'

const SuccesPage = () => {
  return (
        <>
        <GlobalLayoutWithNavbar>
            <>
                <div className='pt-20'>
                    <Back
                        firstElement={
                            <>
                                <div>
                                    <a href='/home'>
                                        <div className='flex items-center text-2xl pt-10 pl-10'>
                                            <BsChevronLeft />
                                            <p> Back</p>
                                        </div>
                                    </a>
                                </div>
                            </>
                        } />
                </div>
            <div className='my-20 mx-20 border-4'>
                <div className='flex justify-center items-center mt-20 font-bold text-3xl'>
                    <p className='w-[60%] text-center'>Thanks From submit form, your form will be review right now. We will inform if your form already approve</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img 
                    src="./checklist.png"
                    className='w-[500px]' 
                    alt="" />
                </div>
                <div className='flex justify-center items-center mt-20'>
                    <a href="/home">
                        <button className='bg-[#2c88d9] text-white py-2 px-20 rounded-md'>
                            Back to Main Menu
                        </button>
                    </a>
                </div>
            </div>
            </>
        </GlobalLayoutWithNavbar>
        </>
  )
}

export default SuccesPage
