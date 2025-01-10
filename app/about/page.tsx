'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Puzzle, Target, Zap, Users, Code, Lightbulb } from 'lucide-react'
import Image from 'next/image'

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
            <div className="bg-white p-8 rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 -mr-32 -mt-32 transform rotate-45"></div>
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <motion.div
                  className="lg:w-1/2 mb-8 lg:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Neoreo 팀 이미지"
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </motion.div>
                <motion.div
                  className="lg:w-1/2 lg:pl-12"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">우리의 이야기</h2>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    Neoreo는 2024년에 설립된 혁신적인 모바일 게임 개발 회사입니다. 우리는 Area Tetris와 같은 독창적인 퍼즐 게임을 통해 플레이어들에게 새로운 도전과 즐거움을 선사합니다. 단순하면서도 깊이 있는 게임플레이, 그리고 끊임없는 혁신을 추구하는 우리의 철학은 게임 속 퍼즐 조각들처럼 완벽하게 맞아떨어져 독특한 게임 경험을 만들어냅니다.
                  </p>
                </motion.div>
              </div>
            </div>
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

