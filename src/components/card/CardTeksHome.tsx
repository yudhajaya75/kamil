import React from 'react'

const CardTeksHome = () => {
    return (
        <>
            <div className='flex justify-center gap-[200px] p-5'>
                <section>
                    <div className=' text-4xl'>Sekolah</div>
                    <ul className=' text-gray-500 mt-5'>
                        <li>Matematika</li>
                        <li>IPA</li>
                        <li>IPS</li>
                        <li>Fisika</li>
                        <li>Biologi</li>
                    </ul>
                </section>
                <section>
                    <div className=' text-4xl'>Teknologi</div>
                    <ul className='text-gray-500 mt-5'>
                        <li>IPS</li>
                        <li>IPA</li>
                        <li>Fisika</li>
                        <li>Biologi</li>
                        <li>Matematika</li>
                    </ul>
                </section>
                <section>
                    <div className=' text-4xl'>Bahasa</div>
                    <ul className='text-gray-500 mt-5'>
                        <li>Fisika</li>
                        <li>Biologi</li>
                        <li>Matematika</li>
                        <li>Inggris</li>
                        <li>Arab</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default CardTeksHome