import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import Back from '../button/Back'

const payment = () => {
  return (
    <>
            <div className='mt-20 min-h-[1500px]'>
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
                        <h1 className='text-center bg text-5xl font-bold pt-10 text-[#788896]'>
                            Confirmation Payment
                        </h1>
                        <div className='flex flex-col justify-center items-center'>
                        <img src="/mandiri.png" 
                        alt="" 
                        className='w-[500px]'
                        />
                        <div>
                         <p className='text-4xl font-bold'>4660095018</p>
                         <p className='text-3xl font-bold pt-3 text-[#788896]'>PT. Stack ngestack</p>
                         <p className='text-5xl font-bold pt-20 text-red-500'>IDR 160.213</p>
                        </div>
                        </div>
                  <div className='pl-[200px] pt-20 text-xl'>
                        <p className='text-2xl font-bold'>How to transfer</p>
                        <ul className='list-decimal pt-3'>
                                <li>masukkan nomor rekening dengan nama yang tertera pada halaman ini</li>
                                <li>masukkan nominal transfer sesuai dengan digit yang diberikan</li>
                                <li>pastikan 3 digit terakhir sesuai dengan yang ada pada halaman ini</li>
                                <li>jika sudah, klik confirm payment agar dapat langsung diproses</li>
                        </ul>
                        <div className='pt-[150px] pl-[250px]'>
                        <button
                                className='px-20 py-2 bg-[#007DFA] rounded text-white'>
                                            Confirm Payment
                                    </button>
                        </div>
                  </div>
                </div>
                </>
            </div>
        </>
  )
}

export default payment
