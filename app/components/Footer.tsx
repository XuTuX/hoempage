import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* 사업자 정보 */}
          <div>
            <h4 className="font-bold text-lg mb-3">회사 정보</h4>
            <p>사업자명: 네오레오</p>
            <p>사업자등록번호: 356-06-03635</p>
            <p>대표: 나찬혁</p>
            <p>Email: nch6807@naver.com</p>
          </div>


          {/* 네비게이션 */}
          <div>
            <h4 className="font-bold text-lg mb-3">고객 지원</h4>
            <ul>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  개인정보 처리 방침
                </Link>
              </li>
              {/* 다른 링크 추가 가능 */}
            </ul>
          </div>
        </div>

        {/* 하단 라인 */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          {/* 저작권 정보 */}

          <h4 className="font-bold text-lg mb-3">© Neoreo</h4>
          <p>&copy; 2023 Neoreo. All rights reserved.</p>

        </div>
      </div>
    </footer>
  )
}
