import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">개인정보 처리 방침</h1>
        <div className="space-y-4">
          <p>[회사명] (이하 "회사")은 개인정보 보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">1. 개인정보의 처리 목적</h2>
          <p>회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
          <ul className="list-disc list-inside pl-4">
            <li>고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급·배송 등</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">2. 개인정보의 처리 및 보유 기간</h2>
          <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
          <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
          <ul className="list-disc list-inside pl-4">
            <li>고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시까지, 다만 채권·채무관계 잔존시에는 해당 채권·채무관계 정산시까지</li>
            <li>전자상거래에서의 계약·청약철회, 대금결제, 재화 등 공급기록 : 5년</li>
          </ul>
          
          {/* 추가적인 개인정보 처리 방침 내용을 여기에 계속해서 작성합니다 */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

