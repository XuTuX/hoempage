'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "우리 회사의 주요 제품은 무엇인가요?",
        answer: "우리 회사의 주요 제품은 [제품명]입니다. 이 제품은 [주요 기능 및 특징]을 제공하여 [목표 고객]의 [해결하고자 하는 문제]를 해결합니다."
    },
    {
        question: "제품 구매 후 어떤 지원을 받을 수 있나요?",
        answer: "제품 구매 후에는 [기간]동안 무상 기술 지원을 제공합니다. 또한, 정기적인 소프트웨어 업데이트와 온라인 사용자 매뉴얼을 제공하고 있습니다."
    },
    {
        question: "회사의 환경 정책은 어떻게 되나요?",
        answer: "우리 회사는 지속 가능한 발전을 중요하게 생각합니다. [구체적인 환경 정책, 예: 탄소 중립, 재활용 프로그램 등]을 실천하고 있으며, 매년 환경 보고서를 발행하고 있습니다."
    },
    {
        question: "채용 과정은 어떻게 진행되나요?",
        answer: "채용 과정은 서류 전형, 코딩 테스트(기술 직군의 경우), 1차 면접, 2차 면접으로 진행됩니다. 각 단계에 대한 자세한 정보는 채용 페이지에서 확인하실 수 있습니다."
    },
    {
        question: "회사의 향후 5년 계획은 무엇인가요?",
        answer: "우리 회사는 향후 5년간 [구체적인 목표, 예: 해외 시장 진출, 신제품 출시, 기술 혁신 등]에 주력할 계획입니다. 이를 통해 [산업 분야]에서의 선도적 위치를 더욱 공고히 하고자 합니다."
    }
]

function FAQItem({ item }: { item: FAQItem }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold">{item.question}</span>
                {isOpen ? <ChevronUp className="flex-shrink-0" /> : <ChevronDown className="flex-shrink-0" />}
            </button>
            {isOpen && (
                <p className="mt-2 text-gray-600">
                    {item.answer}
                </p>
            )}
        </div>
    )
}

export default function FAQ() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="bg-blue-50 py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4 text-center">자주 묻는 질문 (FAQ)</h1>
                        <p className="text-xl text-center max-w-3xl mx-auto">
                            고객님들이 자주 문의하시는 질문들에 대한 답변을 모았습니다.
                            원하시는 정보를 찾지 못하셨다면 언제든 문의해 주세요.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} item={faq} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

