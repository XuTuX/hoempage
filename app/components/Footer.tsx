import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2023 Neoreo. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  개인정보 처리 방침
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

