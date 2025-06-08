// components/HeroSlider.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    { id: 1, image: '/images/slide1.jpg', alt: 'Slide 1', title: 'Premium Audio Equipment' },
    { id: 2, image: '/images/slide2.jpg', alt: 'Slide 2', title: 'Latest Sound Systems' },
    { id: 3, image: '/images/slide3.jpg', alt: 'Slide 3', title: 'Home Theater Solutions' },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-96 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}