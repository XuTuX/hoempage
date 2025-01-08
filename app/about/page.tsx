import Header from '../components/Header'
import Footer from '../components/Footer'
import { Building2, Target, Award, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">회사 소개</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              우리 회사는 [설립 연도]에 설립되어 [주요 사업 분야]에서 혁신적인 솔루션을 제공하고 있습니다.
              고객의 니즈를 최우선으로 생각하며, 지속 가능한 미래를 위해 노력하고 있습니다.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center">
                <Building2 className="mr-2" /> 우리의 미션
              </h2>
              <p className="text-lg">
                우리의 미션은 [회사의 미션 statement]입니다. 우리는 이를 통해 고객과 사회에
                긍정적인 변화를 가져오고자 노력하고 있습니다.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center">
                <Target className="mr-2" /> 우리의 비전
              </h2>
              <p className="text-lg">
                우리는 [회사의 비전 statement]을 목표로 하고 있습니다. 이를 위해 끊임없는
                혁신과 발전을 추구하며, 업계의 선두주자로 자리매김하고자 합니다.
              </p>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center flex items-center justify-center">
            <TrendingUp className="mr-2" /> 우리의 가치
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">혁신</h3>
              <p>우리는 끊임없는 혁신을 통해 업계의 표준을 새롭게 정의합니다.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">신뢰</h3>
              <p>고객과 파트너의 신뢰를 가장 중요한 자산으로 여깁니다.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">팀워크</h3>
              <p>협력을 통해 더 큰 가치를 창출하고 함께 성장합니다.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">지속가능성</h3>
              <p>환경과 사회를 고려한 지속 가능한 비즈니스 모델을 추구합니다.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

