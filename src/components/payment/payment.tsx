import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import Back from '../button/Back'

const payment = () => {
  return (
    <>
            <div className='mt-20 bg-gray-200 min-h-[1500px]'>
                    <nav>
                            <a href='/home'>
                            <div className='flex items-center text-2xl pt-10 pl-10'>
                            <BsChevronLeft />
                            <p>Back</p>
                            </div>
                            </a>
                    </nav>
                <>
                <div className='mx-[15%] w-[70%] h-[1350px] border-2 border-slate-400 shadow-2xl bg-white'>
                        <h1 className='text-center text-black bg text-3xl font-bold pt-10 text-red'>
                            Confirmation Payment
                        </h1>
                </div>
                </>
            </div>
        </>
  )
}

export default payment
