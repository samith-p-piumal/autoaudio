/*
// components/page.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function Page({ id, name, price, image, category }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/products/${id}`}>
                <div className="relative h-48">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <span className="text-sm text-gray-500">{category}</span>
                    <h3 className="text-lg font-semibold mt-1">{name}</h3>
                    <p className="text-gray-800 font-bold mt-2">LKR {price.toLocaleString()}</p>
                </div>
            </Link>
        </div>
    );
}*/

// src/app/products/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
    // Data fetching or hardcoded data
    const products = [
        { id: "1", name: "Product 1", price: 1000, image: "/img1.jpg", category: "Category 1" }
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

// Define ProductCard inside the same file (or move to components/)
function ProductCard({ id, name, price, image, category }: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/products/${id}`}>
                <div className="relative h-48">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <span className="text-sm text-gray-500">{category}</span>
                    <h3 className="text-lg font-semibold mt-1">{name}</h3>
                    <p className="text-gray-800 font-bold mt-2">LKR {price.toLocaleString()}</p>
                </div>
            </Link>
        </div>
    );
}
