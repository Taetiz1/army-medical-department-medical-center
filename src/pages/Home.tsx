import React from 'react'
import ClinicCard from '../components/ClinicCard'

const Home: React.FC = () => {
  return (
    <div>
      <section className="rounded-lg mb-6 overflow-hidden">
        <div className="bg-med-blue text-white py-10 px-6 rounded-t-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">ศูนย์พยาบาล กรมแพทย์ทหารบก</h1>
              <p className="mt-2 text-white/90">ข้อมูลขั้นตอนการรับบริการ คลินิก และการติดต่อ</p>
            </div>
            <div className="flex gap-3">
              <a className="bg-army-green text-white px-4 py-2 rounded shadow" href="#">เริ่มต้นรับบริการ</a>
              <a className="bg-white text-med-blue px-4 py-2 rounded shadow" href="#">ตรวจสิทธิ</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">ขั้นตอนรับบริการ</h2>
        <div className="grid md:grid-cols-5 gap-3">
          <div className="col-span-3 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">สรุปขั้นตอน</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-1">
              <li>ลงทะเบียน / ยืนยันการนัด</li>
              <li>คัดกรองสิทธิ</li>
              <li>วัดสัญญาณชีพ (V/S)</li>
              <li>เข้ารับการตรวจรักษา</li>
              <li>รับยาและคำแนะนำ หลังการรักษา</li>
            </ol>
          </div>
          <div className="col-span-2 space-y-3">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-2">ปุ่มลัดบริการ</h4>
              <div className="flex flex-col gap-2">
                <a className="text-med-blue hover:underline" href="#">ตรวจสิทธิการรักษา</a>
                <a className="text-med-blue hover:underline" href="#">จองคิวออนไลน์</a>
                <a className="text-med-blue hover:underline" href="#">ตรวจสอบผลแลป</a>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-2">ข่าวประชาสัมพันธ์</h4>
              <div className="text-sm text-gray-600">ไม่มีข่าวล่าสุด</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">คลินิกทั้งหมด</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ClinicCard title="ห้องตรวจโรค" desc="ตรวจรักษาโรคทั่วไป, วินิจฉัย, รับยา" />
          <ClinicCard title="คลินิกทันตกรรม" desc="อุดฟัน, ถอนฟัน, ขูดหินปูน" />
          <ClinicCard title="แพทย์ทางเลือก" desc="ฝังเข็ม, นวดแผนไทย" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">แผนที่</h2>
        <div className="bg-white p-4 rounded shadow">Google Map Embed</div>
      </section>
    </div>
  )
}

export default Home
