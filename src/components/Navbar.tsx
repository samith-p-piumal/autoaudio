// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <Link href="/public" className="flex items-center py-4 px-2">
                            <span className="font-semibold text-gray-500 text-lg">Your Logo</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/public" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                            <Link href="/products" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Products</Link>
                            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</Link>
                            <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}