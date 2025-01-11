'use client'

// 라이브러리
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'      // slick 기본 CSS
import 'slick-carousel/slick/slick-theme.css' // slick 테마 CSS

import { motion } from 'framer-motion'
import { MousePointer, Target, Sparkles } from 'lucide-react'

export default function GameplayDemo() {
  // react-slick 옵션
  const settings = {
    dots: true,              // 하단 점(페이지네이션) 표시 여부
    infinite: false,         // 끝까지 가면 더 이상 넘기지 않도록 (true로 하면 무한 루프)
    speed: 500,              // 슬라이드 넘어가는 속도(ms)
    slidesToShow: 1,         // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1,       // 한 번에 넘어갈 슬라이드 개수
    arrows: true,            // 좌우 화살표 표시
    // adaptiveHeight: true, // 슬라이드에 따라 높이 자동 조절 (필요 시 활성화)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">

        {/* react-slick 슬라이더 영역 */}
        <Slider {...settings}>
          {/* 첫 번째 카드 */}
          <div className="px-4">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-video relative mb-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/block_move.gif"
                  alt="블록 이동 데모"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="flex items-start space-x-4">
                <MousePointer className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">직관적인 드래그 앤 드롭</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    손끝으로 블록을 자유롭게 움직여보세요. 원하는 위치에 정확하게 배치할 수 있는 직관적인 조작 방식을 제공합니다.
                    간단한 터치만으로 복잡한 퍼즐을 해결할 수 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 두 번째 카드 */}
          <div className="px-4">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-video relative mb-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/block_remove.gif"
                  alt="영역 제거 데모"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">전략적인 영역 완성</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    영역을 완전히 채우면 해당 부분이 사라지며 점수를 획득합니다.
                    효율적인 블록 배치로 높은 점수에 도전해보세요.
                    작은 영역부터 큰 영역까지, 다양한 크기의 영역을 완성하며 전략을 세워나갑니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 세 번째 카드 */}
          <div className="px-4">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="aspect-video relative mb-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/block_end.gif"
                  alt="게임 진행 데모"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="flex items-start space-x-4">
                <Sparkles className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">끊임없는 도전</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    게임이 종료되면 새로운 영역이 생성됩니다. 매번 다른 패턴으로 생성되는 영역에서 최고 점수에 도전해보세요.
                    지속적으로 변화하는 게임 보드가 끊임없는 재미와 도전을 제공합니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Slider>

      </div>
    </section>
  )
}
