'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Area Tetris는 어떤 게임인가요?",
        answer: "Area Tetris는 고정된 영역을 블록으로 채워나가는 독특한 퍼즐 게임입니다. 드래그 앤 드롭으로 블록을 배치하며, 전략적 사고를 통해 높은 점수를 얻는 것이 목표입니다."
    },
    {
        question: "Area Tetris의 주요 특징은 무엇인가요?",
        answer: "Area Tetris의 주요 특징은 1) 간단한 조작과 깊이 있는 전략, 2) 시각적으로 즐거운 디자인, 3) 매번 다른 도전, 4) 중독성 있는 게임플레이입니다. 이러한 특징들이 조화를 이루어 독특한 게임 경험을 제공합니다."
    },
    {
        question: "Neoreo는 어떤 회사인가요?",
        answer: "Neoreo는 2024년에 설립된 혁신적인 모바일 게임 개발 회사입니다. 우리는 Area Tetris와 같은 창의적인 퍼즐 게임을 통해 플레이어들에게 새로운 도전과 즐거움을 선사하는 것을 목표로 합니다."
    },
    {
        question: "Neoreo의 핵심 가치는 무엇인가요?",
        answer: "Neoreo의 핵심 가치는 창의성, 도전, 혁신입니다. 우리는 Area Tetris의 게임플레이처럼 새로운 아이디어를 추구하고, 끊임없이 변화하는 기술과 트렌드에 도전하며, 게임 산업에 혁신적인 솔루션을 제시하고자 합니다."
    },
    {
        question: "Area Tetris는 어디에서 다운로드할 수 있나요?",
        answer: "Area Tetris는 현재 iOS App Store에서 다운로드할 수 있습니다. 앱 스토어에서 'Area Tetris'를 검색하거나, 우리 웹사이트의 다운로드 링크를 통해 쉽게 찾을 수 있습니다."
    },

    {
        question: "Neoreo는 앞으로 어떤 계획을 가지고 있나요?",
        answer: "Neoreo는 Area Tetris의 성공을 바탕으로 더 많은 혁신적인 퍼즐 게임을 개발할 계획입니다. 우리는 지속적으로 새로운 게임 메커니즘을 연구하고, 사용자 경험을 개선하며, 글로벌 시장 진출을 목표로 하고 있습니다."
    },

]

function FAQItem({ item }: { item: FAQItem }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            className="border-b border-gray-200 px-8 py-6"
            initial={false}
            transition={{ duration: 0.3 }}
        >
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                {isOpen ? <ChevronUp className="flex-shrink-0 text-blue-500" /> : <ChevronDown className="flex-shrink-0 text-blue-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="mt-2 text-gray-600">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            <main className="flex-grow">
                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            className="text-5xl font-bold mb-12 text-center text-gray-800"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                자주 묻는 질문 (FAQ)
                            </span>
                        </motion.h1>
                        <motion.div
                            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} item={faq} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

