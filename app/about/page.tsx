'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Puzzle, Target, Zap, Users, Code, Lightbulb } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center text-gray-800"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Neoreo: 혁신적인 퍼즐의 세계
              </span>
            </motion.h1>
            <motion.div 
              className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden relative"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 -mr-32 -mt-32 transform rotate-45"></div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800 relative z-10">우리의 이야기</h2>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">혁신적인 시작</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Neoreo는 2024년에 설립된 혁신적인 모바일 게임 개발 회사입니다. Area Tetris와 같은 독창적인 퍼즐 게임을 통해 플레이어들에게 새로운 도전과 즐거움을 선사합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">우리의 철학</h3>
                  <ul className="list-none space-y-2 text-gray-700 text-lg">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      단순하면서도 깊이 있는 게임플레이
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      끊임없는 혁신 추구
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      퍼즐 조각처럼 완벽하게 맞아떨어지는 게임 경험
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">게임 개발: 우리의 예술</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    우리는 게임 개발을 단순한 작업이 아닌 예술로 여깁니다. 각 프로젝트는 다음 요소들의 조화로운 결과물입니다:
                  </p>
                  <ul className="list-none space-y-2 text-gray-700 text-lg">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      창의성
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      첨단 기술
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      플레이어에 대한 깊은 이해
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">함께 만드는 미래</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Neoreo의 모든 구성원은 이러한 비전을 공유하며, 함께 게임 산업의 새로운 지평을 열어가고 있습니다.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full opacity-20 -ml-16 -mb-16 transform rotate-45"></div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-gray-800"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              우리의 가치
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Puzzle, title: "창의성", description: "Area Tetris의 독특한 게임플레이처럼, 우리는 항상 새로운 아이디어를 추구합니다." },
                { icon: Target, title: "도전", description: "끊임없이 변화하는 퍼즐처럼, 우리는 새로운 기술과 트렌드에 도전합니다." },
                { icon: Zap, title: "혁신", description: "블록을 효율적으로 배치하듯, 우리는 게임 산업에 혁신적인 솔루션을 제시합니다." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-gray-800"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              우리의 접근 방식
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "플레이어 중심", description: "Area Tetris의 직관적인 조작처럼, 우리는 항상 사용자 경험을 최우선으로 생각합니다." },
                { icon: Code, title: "기술 혁신", description: "끊임없이 진화하는 퍼즐처럼, 우리는 최신 기술을 활용하여 게임을 개발합니다." },
                { icon: Lightbulb, title: "창의적 문제 해결", description: "복잡한 퍼즐을 해결하듯, 우리는 독창적인 방식으로 개발 과제를 해결합니다." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-gray-800"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              함께 만들어가는 퍼즐의 세계
            </motion.h2>
            <motion.p 
              className="mb-8 text-gray-600 text-lg max-w-2xl mx-auto"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Neoreo는 단순한 게임 개발사가 아닙니다. 우리는 퍼즐처럼 복잡하고 아름다운 디지털 경험을 만들어내는 혁신가들입니다. 
              Area Tetris를 시작으로, 우리는 계속해서 새로운 형태의 퍼즐과 도전을 여러분께 선사할 것을 약속드립니다.
            </motion.p>
            <motion.a 
              href="/product" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Puzzle className="w-5 h-5 mr-2" />
              우리의 게임 살펴보기
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

