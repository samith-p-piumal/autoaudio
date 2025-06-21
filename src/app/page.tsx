// app/page.tsx
'use client'; // Needed for interactivity like the slider

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
    // Hero slider state
    //const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Premium Headphones X1',
            price: 24999,
            image: 'products/soundbar.jpg',
            category: 'Headphones'
        },
        {
            id: 2,
            name: 'Bluetooth Speaker Pro',
            price: 18999,
            image: 'products/soundbar.jpg',
            category: 'Speakers'
        },
        {
            id: 3,
            name: 'Home Theater System',
            price: 125999,
            image: 'products/soundbar.jpg',
            category: 'Home Theater'
        },
        {
            id: 4,
            name: 'Soundbar Elite',
            price: 65999,
            image: 'products/soundbar.jpg',
            category: 'Soundbars'
        },
    ];

    // Hero slides data
    const slides = [
        { id: 1, image: '/carousel/soundbar.jpg', title: 'Premium Audio Equipment', subtitle: 'Experience sound like never before' },
        { id: 2, image: '/carousel/soundbar.jpg', title: 'Latest Sound Systems', subtitle: 'Innovative technology for your home' },
        { id: 3, image: '/carousel/soundbar.jpg', title: 'Home Theater Solutions', subtitle: 'Cinematic experience at home' },
    ];

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            //setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Audio Equipment Store</title>
                <meta name="description" content="Premium audio equipment and sound systems" />
            </Head>

            {/* Navigation */}
            <nav className="bg-black shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo - Replace with your actual logo */}
                            <a href="#home" className="flex items-center">
                                <img
                                    src="/logo.jpg" // Path to your logo in public folder
                                    alt="Your Company Logo"
                                    className="h-10 w-auto" // Adjust size as needed
                                />
                                {/* Optional text beside logo */}
                                {/* <span className="ml-2 text-xl font-semibold text-gray-800">AudioPro</span> */}
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-white hover:text-blue-600">Home</a>
                            <a href="#products" className="text-white hover:text-blue-600">Products</a>
                            <a href="#about" className="text-white hover:text-blue-600">About</a>
                            <a href="#contact" className="text-white hover:text-blue-600">Contact</a>
                        </div>

                        {/* Mobile menu button - remains the same */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - remains the same */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white pb-3 px-4">
                        <div className="flex flex-col space-y-2">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
                            <a href="#products" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Products</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Navigation
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-800">Tharindu Auto</span>
                        </div>

                         Desktop Navigation
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
                            <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                        </div>

                         Mobile menu button
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                 Mobile Navigation
                {isMenuOpen && (
                    <div className="md:hidden bg-white pb-3 px-4">
                        <div className="flex flex-col space-y-2">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
                            <a href="#products" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Products</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>*/}

            {/* Hero Slider
            <section id="home" className="relative">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="absolute inset-0 bg-black/30"></div>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute text-center text-white px-4">
                                <h1 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h1>
                                <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>*/}

            <section id="home" className="relative h-screen">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                        {/* Fallback image if video doesn't load */}
                        <img src="/hero-fallback.jpg" alt="Premium Audio Equipment" className="w-full h-full object-cover" />
                    </video>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
                        Immersive Audio Experience
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fadeIn delay-100">
                        Discover the perfect sound for your space with our premium audio solutions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
                        <a
                            href="#products"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                        >
                            View Products
                        </a>
                        <a
                            href="#contact"
                            className="bg-transparent hover:bg-white/20 text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <a href="#products" className="text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12" >Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <span className="text-sm text-gray-500">{product.category}</span>
                                <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                                <p className="text-gray-800 font-bold mt-2">LKR {product.price.toLocaleString()}</p>
                                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
                    <div className="md:flex items-center gap-12">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="about/soundbar.jpg" alt="Our store" className="rounded-lg shadow-lg w-full" />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4">Premium Audio Solutions Since 2010</h3>
                            <p className="text-gray-700 mb-4">
                                We are Sri Lanka&#39;s leading audio equipment provider, offering the latest in sound technology for both home and professional use.
                            </p>
                            <p className="text-gray-700">
                                Our team of audio experts carefully selects each product in our inventory to ensure the highest quality and performance for our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <div className="md:flex gap-12">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                123 Audio Street, Colombo 05, Sri Lanka
                            </p>
                            <p className="flex items-center">
                                <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +94 11 234 5678
                            </p>
                            <p className="flex items-center">
                                <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@audiopro.lk
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="md:flex justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold">CarUnity</h3>
                            <p className="text-gray-400 mt-1">Premium Audio Equipment</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/carunity.lk" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} CarUnity.lk. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}