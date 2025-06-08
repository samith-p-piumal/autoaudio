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
}