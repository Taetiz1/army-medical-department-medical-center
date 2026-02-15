import React from 'react'
import ClinicCard from '../components/ClinicCard'

const Home: React.FC = () => {
  return (
    <div>
      <section className="rounded-lg mb-6 overflow-hidden">
        <div className="bg-med-blue text-white py-12 px-6 rounded-t-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">ศูนย์พยาบาล กรมแพทย์ทหารบก</h1>
              <p className="text-lg text-white/90">ให้บริการด้วยความเป็นมืออาชีพ ด้วยใจไม่หวังสิ่งตอบแทน</p>
              <p className="text-white/80 mt-2">ข้อมูลขั้นตอนการรับบริการ คลินิก สิทธิการรักษา และการติดต่อ</p>
            </div>
            <div className="flex gap-3">
              <a className="bg-army-green text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition font-semibold" href="#steps">เริ่มต้นรับบริการ</a>
              <a className="bg-white text-med-blue px-6 py-3 rounded shadow hover:bg-gray-100 transition font-semibold" href="#clinics">ดูคลินิก</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl font-bold text-army-green">7</div>
            <div className="text-gray-600 mt-2">หน่วยบริการ</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl font-bold text-med-blue">24/7</div>
            <div className="text-gray-600 mt-2">บริการฉุกเฉิน</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl font-bold text-army-green">100+</div>
            <div className="text-gray-600 mt-2">บุคลากรทางการแพทย์</div>
          </div>
        </div>
      </section>

      <section className="mb-6" id="steps">
        <h2 className="text-2xl font-semibold mb-4">ขั้นตอนรับบริการ</h2>
        <div className="grid md:grid-cols-5 gap-3">
          <div className="col-span-3 bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-3">5 ขั้นตอนง่ายๆ</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li><span className="font-semibold">ลงทะเบียน</span> / ยืนยันการนัด</li>
              <li><span className="font-semibold">คัดกรองสิทธิ</span> ตรวจสอบสิทธิการรักษา</li>
              <li><span className="font-semibold">วัดสัญญาณชีพ</span> (ความดัน ชีพจร อุณหภูมิ)</li>
              <li><span className="font-semibold">เข้ารับการตรวจรักษา</span> พบแพทย์/พยาบาล</li>
              <li><span className="font-semibold">รับยาและคำแนะนำ</span> หลังการรักษา</li>
            </ol>
          </div>
          <div className="col-span-2 space-y-3">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-2 text-med-blue">ลิงก์ด่วน</h4>
              <div className="flex flex-col gap-2">
                <a className="text-med-blue hover:underline font-semibold" href="#rights">ตรวจสิทธิการรักษา</a>
                <a className="text-med-blue hover:underline font-semibold" href="#contact">จองคิว / ติดต่อ</a>
                <a className="text-med-blue hover:underline font-semibold" href="#faq">คำถามที่พบบ่อย</a>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-2 text-med-blue">เวลาทำการ</h4>
              <div className="text-sm text-gray-600">
                <p>จ.-ศ. 08:30 - 16:30 น.</p>
                <p className="mt-1">ปิดท.ส. อา. วันธรรมชาติ</p>
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

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ข้อคิดเห็นผู้ใช้บริการ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <div className="text-sm text-gray-600">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mt-3 italic">"บริการดี เจ้าหน้าที่ใจดี ตรวจรักษาตรงเวลา ขอบคุณครับ"</p>
            <p className="text-sm text-gray-500 mt-2">- ผู้ใช้บริการ</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-sm text-gray-600">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mt-3 italic">"โรงพยาบาลมีความสะอาด และเป็นระเบียบ แพทย์อธิบายรายละเอียดชัดเจน"</p>
            <p className="text-sm text-gray-500 mt-2">- ผู้ใช้บริการ</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="text-sm text-gray-600">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mt-3 italic">"บริการรวดเร็ว ราคาต่ำ เหมาะสำหรับครอบครัว"</p>
            <p className="text-sm text-gray-500 mt-2">- ผู้ใช้บริการ</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
