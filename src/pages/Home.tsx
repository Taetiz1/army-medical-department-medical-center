import React from 'react'
import ClinicCard from '../components/ClinicCard'

const Home: React.FC = () => {
  type NewsType = { id: number; folder: string; title: string; };
  type NewsType = { id: number; folder: string; title: string; };
  const [news, setNews] = React.useState<NewsType[]>([]);
  React.useEffect(() => {
    fetch('/news-data.json')
      .then(res => res.json())
      .then(setNews);
  }, []);
  return (
    <div>
      <section className="rounded-2xl mb-8 overflow-hidden shadow-lg animate-fade-in">
        <div className="bg-primary-green text-gold py-14 px-8 rounded-t-2xl relative">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">สถานพยาบาลกรมแพทย์ทหารบก</h1>
              <p className="text-xl text-gold/90 mb-2">ให้บริการด้วยความเป็นมืออาชีพ ด้วยใจไม่หวังสิ่งตอบแทน</p>
              <p className="text-gold/80">ข้อมูลขั้นตอนการรับบริการ คลินิก สิทธิการรักษา และการติดต่อ</p>
            </div>
            <div className="flex flex-col gap-4 animate-slide-in-right">
              <a className="bg-gold text-dark px-8 py-4 rounded-full shadow-lg hover:bg-gold/90 hover:scale-105 transition-all font-bold text-lg" href="#steps">เริ่มต้นรับบริการ</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        {/* News Slide Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-green">ข่าวประชาสัมพันธ์</h2>
          <div className="w-full overflow-x-auto">
            <div className="flex gap-4">
              {/* Dynamic news slide */}
              {news && news.map(n => (
                <a key={n.id} href={`/news/${n.id}`} className="block">
                  <img src={`/news-img/${n.folder}/slide.jpg`} alt={n.title} className="rounded-xl shadow-lg w-64 h-40 object-cover" />
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <div className="text-5xl font-extrabold text-primary-green drop-shadow">7</div>
            <div className="text-dark mt-3 font-medium">หน่วยบริการ</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
            <div className="text-4xl font-extrabold text-primary-green drop-shadow">08.00 - 12.00</div>
            <div className="text-dark mt-3 font-medium">ให้บริการ จันทร์-ศุกร์ เว้นวันหยุดราชการ</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
            <div className="text-5xl font-extrabold text-primary-green drop-shadow">40</div>
            <div className="text-dark mt-3 font-medium">บุคลากรทางการแพทย์</div>
          </div>
        </div>
      </section>

      <section className="mb-6" id="steps">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">ขั้นตอนรับบริการ</h2>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4 text-lg text-gray-800">5 ขั้นตอนง่ายๆ</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2 text-base">
              <li>ลงทะเบียน / ยืนยันการนัด</li>
              <li>คัดกรองสิทธิ ตรวจสอบสิทธิการรักษา</li>
              <li>วัดสัญญาณชีพ (ความดัน ชีพจร อุณหภูมิ)</li>
              <li>เข้ารับการตรวจรักษา พบแพทย์/พยาบาล</li>
              <li>รับยาและคำแนะนำ หลังการรักษา</li>
            </ol>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold mb-2 text-gray-800">ลิงก์ด่วน</h4>
              <div className="flex flex-col gap-2">
                <a className="text-gray-700 hover:underline" href="#rights">ตรวจสิทธิการรักษา</a>
                <a className="text-gray-700 hover:underline" href="#contact">จองคิว / ติดต่อ</a>
                <a className="text-gray-700 hover:underline" href="#faq">คำถามที่พบบ่อย</a>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold mb-2 text-gray-800">เวลาทำการ</h4>
              <div className="text-base text-gray-700">
                <p>จ.-ศ. 08:30 - 16:30 น.</p>
                <p className="mt-1">จันทร์-ศุกร์ เว้นวันหยุดราชการ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6" id="clinics">
        <h2 className="text-2xl font-semibold mb-4">คลินิกและบริการ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ClinicCard title="ห้องตรวจโรค" desc="ตรวจรักษาโรคทั่วไป, วินิจฉัย, LAB, รับยา" />
          <ClinicCard title="คลินิกทันตกรรม" desc="อุดฟัน, ถอนฟัน, ขูดหินปูน" />
          <ClinicCard title="แพทย์ทางเลือก" desc="ฝังเข็ม, นวดแผนไทย" />
        </div>
      </section>
    </div>
  )
}

export default Home
