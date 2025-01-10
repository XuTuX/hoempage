'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Puzzle, Target, Zap, Star, Award } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Product() {
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
                AREA TETRIS
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
                    alt="Area Tetris 게임 스크린샷"
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
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">게임 개요</h2>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    AREA TETRIS는 고정된 영역을 블록으로 채워 나가는 독특한 퍼즐 게임입니다. 매번 새로운 블록이 랜덤으로 생성되며, 플레이어는 드래그 앤 드롭 방식으로 해당 블록을 고정된 영역에 배치해 나가야 합니다. 블록을 채워 영역을 완성하면 해당 영역이 사라지고 보너스 점수를 얻게 됩니다. 간단한 조작이지만, 효율적으로 블록을 배치해 높은 점수를 노리는 것이 관건인 게임입니다.
                  </p>
                  <motion.a
                    href="https://apps.apple.com/kr/app/area-tetris/id6737521199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    iOS에서 다운로드
                  </motion.a>
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
              주요 게임 방식
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Puzzle, title: "블록 배치", description: "Drag & Drop을 통해 블록을 원하는 위치에 놓을 수 있으며, 손끝에서 느껴지는 조작의 재미가 특징입니다." },
                { icon: Target, title: "고정된 영역 채우기", description: "매판 고정된 영역이 주어지며, 블록을 배치해 이 영역을 가득 채우는 것이 목표입니다. 영역이 가득 차면 큰 점수를 얻고, 해당 영역이 사라지면서 새로운 영역 도전이 가능합니다." },
                { icon: Zap, title: "랜덤 블록 생성", description: "영역이 랜덤으로 생성되어 플레이할 때마다 다양한 전략이 요구됩니다. 단순히 블록을 쌓는 방식과 달리, 효율적으로 배치해야 더 높은 점수를 얻을 수 있습니다." }
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
              게임의 특징과 매력
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Puzzle, title: "간단한 조작, 깊이 있는 전략", description: "누구나 쉽게 배우고 시작할 수 있지만, 고득점을 위해서는 전략적 사고가 필수입니다." },
                { icon: Star, title: "시각적으로 즐거운 디자인", description: "다채로운 색상의 블록과 깔끔한 그래픽이 조화를 이루어, 몰입감을 높여줍니다." },
                { icon: Zap, title: "매번 다른 도전", description: "블록이 무작위로 생성되므로 매번 새로운 퍼즐이 기다리고 있습니다." },
                { icon: Award, title: "중독성 있는 게임플레이", description: "손쉽게 드래그 앤 드롭으로 블록을 배치하면서 영역을 완성해 나가는 재미가 일품입니다." }
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
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center text-gray-800"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              게임 규칙
            </motion.h2>
            <motion.ol
              className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-600 bg-white p-8 rounded-xl shadow-lg"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <li className="mb-4">매판 마다 새로운 랜덤 블록이 생성됩니다.</li>
              <li className="mb-4">고정된 영역에 블록을 드래그하여 빈 칸을 채웁니다.</li>
              <li className="mb-4">영역을 완전히 채우면 해당 영역이 사라지며 보너스 점수를 얻습니다.</li>
              <li>모든 영역을 채워 점수를 최대한 높여보세요!</li>
            </motion.ol>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl font-bold mb-8 text-white"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              지금 바로 AREA TETRIS를 즐겨보세요!
            </motion.h2>
            <motion.p
              className="mb-8 text-white text-lg max-w-2xl mx-auto"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              퍼즐 게임을 좋아하는 사용자, 빠른 판단력과 전략적 사고를 즐기는 사용자에게 이상적입니다.
              단순한 조작으로 잠깐씩 즐기기에도 좋고, 최고 점수를 노리기 위해 몰입하며 오래 플레이할 수도 있습니다.
            </motion.p>
            <motion.a
              href="https://apps.apple.com/kr/app/area-tetris/id6737521199"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              iOS에서 다운로드
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

