import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 md:mb-0">Neoreo</Link>
        <ul className="flex space-x-4">
          <li><Link href="/about" className="hover:text-blue-600">회사 소개</Link></li>
          <li><Link href="/product" className="hover:text-blue-600">제품 소개</Link></li>
          <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  )
}

