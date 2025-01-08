import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-40">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="제품 이미지"
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">게임 제목</h1>
              <p className="text-gray-600 mb-6 text-lg">몰입감 있는 스토리와 아름다운 그래픽의 어드벤처 게임</p>

              <div className="grid md:grid-rows-2 ">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">게임 설명</h2>
                  <p className="text-gray-700 mb-10">
                    이 게임은 플레이어가 신비로운 세계를 탐험하며 다양한 퍼즐을 풀고 캐릭터를 성장시키는 어드벤처 게임입니다.
                    플레이어의 선택에 따라 스토리가 변화하며, 여러 엔딩을 경험할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">주요 특징</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>다중 엔딩 시스템</li>
                    <li>실시간 그래픽</li>
                    <li>독특한 퍼즐 요소</li>
                    <li>캐릭터 커스터마이징</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-3">기술 사양</h2>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">장르</td>
                      <td className="py-2">어드벤처, 퍼즐</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">플랫폼</td>
                      <td className="py-2">PC, 콘솔</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">출시일</td>
                      <td className="py-2">2023년 Q4 예정</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

