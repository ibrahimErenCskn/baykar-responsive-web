"use client"

import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        company: 'Zoomerr',
        text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem.',
        name: 'Hellen Jummy',
        role: 'Team Lead',
        image: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
    {
        id: 2,
        company: 'SHELLS',
        text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper.',
        name: 'Hellena John',
        role: 'Co-founder',
        image: 'https://randomuser.me/api/portraits/women/80.jpg',
    },
    {
        id: 3,
        company: 'ArtVenue',
        text: 'A eget sed posuere dui risus habitasse mauris. Pretium vehicula pretium posuere justo sed.',
        name: 'David Oshodi',
        role: 'Manager',
        image: 'https://randomuser.me/api/portraits/men/81.jpg',
    },
    {
        id: 4,
        company: 'SHELLS',
        text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper.',
        name: 'Hellena John',
        role: 'Co-founder',
        image: 'https://randomuser.me/api/portraits/women/80.jpg',
    },
    {
        id: 5,
        company: 'ArtVenue',
        text: 'A eget sed posuere dui risus habitasse mauris. Pretium vehicula pretium posuere justo sed.',
        name: 'David Oshodi',
        role: 'Manager',
        image: 'https://randomuser.me/api/portraits/men/81.jpg',
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto p-4">
            <h2 className="text-center text-3xl font-bold mb-6">Because they love us</h2>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className={`min-w-[33.33%] p-6 ${index === testimonials.length - 1 ? 'pr-3' : ''}`}>
                            <div className="p-6 bg-white shadow-md rounded-lg text-center">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold">{testimonial.company}</h3>
                                </div>
                                <p className="mb-4 text-gray-600">{testimonial.text}</p>
                                <div className="flex justify-center items-center mt-4">
                                    <img
                                        className="w-10 h-10 rounded-full mr-3"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                    <div className="text-left">
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                <button onClick={goToPrevious} className="bg-gray-200 p-2 rounded-full">
                    ←
                </button>
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <button onClick={goToNext} className="bg-gray-200 p-2 rounded-full">
                    →
                </button>
            </div>
        </div>
    );
};

export default Carousel;
