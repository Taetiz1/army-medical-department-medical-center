import React from 'react'
import ClinicCard from '../components/ClinicCard'

const PREVIEW_COUNT = 3

const Home: React.FC = () => {
  type NewsType = { id: number; folder: string; title: string; date?: string; };
  const [news, setNews] = React.useState<NewsType[]>([]);

  React.useEffect(() => {
    fetch('/news-data.json')
      .then(res => res.json())
      .then(setNews);
  }, []);

  const visibleNews = news.slice(0, PREVIEW_COUNT);
  const hasMore = news.length > PREVIEW_COUNT;

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
        {/* News Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-primary-green">ข่าวประชาสัมพันธ์</h2>
          </div>

          {news.length === 0 ? (
            <p className="text-gray-400 text-sm">ไม่มีข่าวประชาสัมพันธ์ในขณะนี้</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleNews.map(n => (
                <a
                  key={n.id}
                  href={`/news/${n.id}`}
                  className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <div className="relative overflow-hidden h-36">
                    <img
                      src={`/news-img/${n.folder}/slide.jpg`}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">{n.title}</p>
                    {n.date && (
                      <p className="text-xs text-gray-400 mt-1">{n.date}</p>
                    )}
                  </div>
                </a>
              ))}

              {/* See All Card — appears as the last card in the grid */}
              {hasMore && (
                <a
                  href="/news"
                  className="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary-green/40 hover:border-primary-green hover:bg-primary-green/5 transition-all duration-200 min-h-[10rem] gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-green/10 group-hover:bg-primary-green/20 flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-primary-green">ดูทั้งหมด</span>
                  <span className="text-xs text-gray-400">{news.length} รายการ</span>
                </a>
              )}
            </div>
          )}
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