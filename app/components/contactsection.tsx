import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">연락하기</h2>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-6">연락처 정보</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 mr-4 text-blue-600" />
                            <span>contact@example.com</span>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 mr-4 text-blue-600" />
                            <span>+82 02-1234-5678</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-4 text-blue-600" />
                            <span>서울특별시 강남구 테헤란로 123</span>
                        </div>
                        <div className="flex items-start">
                            <Clock className="w-5 h-5 mr-4 text-blue-600 mt-1" />
                            <div>
                                <h4 className="font-semibold">영업 시간</h4>
                                <p>월요일 - 금요일: 9:00 AM - 6:00 PM</p>
                                <p>토요일 - 일요일: 휴무</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
