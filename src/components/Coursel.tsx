"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface ItemProps {
    id: number;
    text: string;
    name: string;
    title: string;
    url?: string;
    headerUrl?: string;
}

interface CarouselProps {
    items: ItemProps[]
}

const Carousel = ({ items }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<any>(null);
    const startX = useRef<any>(0);
    const endX = useRef<any>(0);
    const [translateRate, setTranslateRate] = useState(33.33);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (windowWidth < 1024) {
            setTranslateRate(100);
        } else {
            setTranslateRate(33.33);
        }
    }, [windowWidth])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleTouchStart = (e: any) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: any) => {
        endX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleMouseDown = (e: any) => {
        startX.current = e.clientX;
    };

    const handleMouseUp = (e: any) => {
        endX.current = e.clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (startX.current > endX.current + 50) {
            nextSlide();
        } else if (startX.current < endX.current - 50) {
            prevSlide();
        }
    };

    return (
        <div
            className="relative overflow-hidden w-full mx-auto select-none cursor-pointer"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <div className="bg-[#FDE68A] w-full sm:w-[96%] h-[65%] sm:h-[60%] absolute top-10 sm:top-20 left-0 sm:left-10">

            </div>
            <div
                className="flex transition-transform duration-300 mx-8 sm:mx-32 sm:mt-12 z-10 "
                style={{
                    transform: `translateX(-${currentIndex * translateRate}%)`,
                }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`w-full lg:w-1/3 h-[440px] sm:h-[600px] flex-shrink-0`}
                    >
                        <div className="min-w-[300px] w-full h-full flex justify-center flex-col text-2xl px-4 sm:p-8">
                            <div className="bg-white sm:h-[430px] w-[100%] sm:w-full rounded-[20px] border-[1px] shadow-courselShadowTwo p-8 gap-4 sm:gap-16 flex flex-col">
                                <div >
                                    <Image
                                        src={item.headerUrl || "https://i.hizliresim.com/9uk0p3q.png"}
                                        alt="coursel image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <span className="text-base sm:text-lg font-roboto overflow-hidden">
                                    {item.text}
                                </span>
                                <div className="flex items-center">
                                    <Image
                                        src={item.url || "https://i.hizliresim.com/nj2z82i.png"}
                                        alt="user thumb"
                                        width={60}
                                        height={60}
                                    />
                                    <div className="flex flex-col ml-4 overflow-hidden">
                                        <span className="text-lg">{item.name}</span>
                                        <span className="text-base text-[#475569]">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="font-roboto">
                <span className="absolute left-[14%] sm:left-20 top-0 translate-y-[-25%] font-bold sm:font-extrabold text-[32px] sm:text-[56px] text-center sm:text-left">Because they love us</span>
                <div>
                    <button
                        className="absolute right-36 top-0 invisible sm:visible transform border-2 border-tertiary rounded-full text-tertiary p-3 w-12 h-12 hidden lg:flex items-center justify-center"
                        onClick={prevSlide}
                    >
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 7H1H13.5ZM1 7L7 1L1 7ZM1 7L7 13L1 7Z" fill="#78350F" />
                            <path d="M1 7L7 13M13.5 7H1H13.5ZM1 7L7 1L1 7Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        className="absolute right-16 top-0 invisible sm:visible transform border-2 border-tertiary rounded-full text-tertiary p-3 w-12 h-12 hidden lg:flex items-center justify-center"
                        onClick={nextSlide}
                    >
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H13.5H1ZM13.5 7L7.5 1L13.5 7ZM13.5 7L7.5 13L13.5 7Z" fill="#78350F" />
                            <path d="M13.5 7L7.5 13M1 7H13.5H1ZM13.5 7L7.5 1L13.5 7Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
