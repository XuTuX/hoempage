import Link from 'next/link'

export default function CompanyIntro() {
  return (
    <section id="about" className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Neoreo</h1>
        <p className="text-xl mb-8">우리 회사는 2024년에 설립되어 모바일 보드게임에 혁신을 만들고 있습니다.</p>
        <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block">
          자세히 보기
        </Link>
      </div>
    </section>
  )
}

