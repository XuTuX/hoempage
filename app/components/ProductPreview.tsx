import Link from 'next/link'
import Image from 'next/image'

export default function ProductPreview() {
  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">게임 소개</h2>
        <Link href="/product" className="block">
          <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center items-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="제품 이미지"
                width={200}
                height={200}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-4xl font-bold mb-6 text-gray-800">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow-sm">
                  Area Tetris
                </span>
              </h3>
              <p className="mb-8 text-lg text-gray-600">
                이 제품은 <span className="font-semibold text-blue-500">[주요 기능]</span>을 제공합니다.
                혁신적인 기술을 통해 사용자의 경험을 향상시키며, <span className="font-semibold text-blue-500">[산업 분야]</span>에 새로운 표준을 제시합니다.
              </p>
              <ul className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-20">
                <li className="text-xl font-semibold text-gray-700 bg-gray-100 px-9 py-6 rounded-lg shadow-md">
                  ✔ 주요 특징 1
                </li>
                <li className="text-xl font-semibold text-gray-700 bg-gray-100 px-9 py-6 rounded-lg shadow-md">
                  ✔ 주요 특징 2
                </li>
                <li className="text-xl font-semibold text-gray-700 bg-gray-100 px-9 py-6 rounded-lg shadow-md">
                  ✔ 주요 특징 3
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
