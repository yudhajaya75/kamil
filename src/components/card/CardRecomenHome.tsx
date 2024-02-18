import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cardsData from './cardsDataRecomen';

const CardRecomenHome = () => {
    return (
        <>
            <div className="pt-[100px]">
                <span>
                    <h1 className='text-4xl mx-[300px]'>Recomendation</h1>
                </span>
                <div className='pt-20 mx-[100px]'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={5}
                        className="mySwiper"
                    >
                        {cardsData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="flex flex-col items-center pb-10">
                                    <img
                                        className="w-[150px] h-[150px] mb-3 rounded-full shadow-lg"
                                        src={card.imageUrl}
                                        alt={`Card ${card.id} image`}
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900">
                                        {card.title}
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {card.subtitle}
                                    </span>
                                    <button className='bg-[#6558f5] text-white my-2 mx-2 py-2 px-2 rounded-md'>{card.button}</button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <p className='text-center text-3xl font-bold'>OR</p>
        </>
    );
};

export default CardRecomenHome;
