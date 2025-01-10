import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-100 border-b p-4">
            <h1 className="text-2xl font-bold">개인정보 처리방침</h1>
            <p className="text-sm text-gray-600 mt-1">시행일: 2023년 1월 1일</p>
          </div>

          <div className="p-6 space-y-6">
            <p><strong>neoreo</strong> (이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>

            <section>
              <h2 className="text-xl font-semibold mb-2">1. 개인정보의 처리 목적</h2>
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>홈페이지 회원가입 및 관리 - 회원 가입의사 확인을 위한 목적</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. 개인정보의 처리 및 보유 기간</h2>
              <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>홈페이지 회원가입 및 관리: 회원 탈퇴 시 또는 파기 요청 시까지</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. 처리하는 개인정보의 항목</h2>
              <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>홈페이지 회원가입 및 관리 - 필수항목: 이메일</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. 개인정보의 파기절차 및 파기방법</h2>
              <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때는 지체없이 해당 개인정보를 파기합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
              <p>정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 권리 행사는 회사에 대해 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. 개인정보의 안전성 확보조치</h2>
              <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>정기적인 자체 감사 실시 (분기 1회)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h2>
              <p>회사는 정보주체의 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용하지 않습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. 개인정보 보호책임자</h2>
              <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <div className="mt-2">
                <p><strong>개인정보 보호책임자</strong></p>
                <p>성명: 나찬혁</p>
                <p>직책: 대표</p>
                <p>연락처: +82 10-9040-6807, <a href="mailto:nch6807@naver.com" className="text-blue-600 hover:underline">nch6807@naver.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. 개인정보 열람청구</h2>
              <p>정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>
              <div className="mt-2">
                <p><strong>개인정보 열람청구 접수·처리 부서</strong></p>
                <p>부서명: neoreo</p>
                <p>연락처: +82 10-9040-6807</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. 개인정보 처리방침 변경</h2>
              <p>이 개인정보 처리방침은 2023년 1월 1일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

