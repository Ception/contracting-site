import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  function navigateToOrder() {
    router.push('/');
  }

  return (
    <header className="p-4 bg-rose-700 text-white drop-shadow-xl">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-no-shrink text-white mr-6 cursor-pointer transform hover:scale-105 transition-transform duration-500">
          <span className="text-3xl font-bold tracking-wider italic" onClick={navigateToOrder}>Searle Quality Contracting</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow flex justify-end space-x-4">
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded">
                Home
            </Link>
            <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded">
                Services
            </Link>
            <Link href="/menu" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded">
                Menu
            </Link>
            <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded">
                About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}