import React from 'react'
import ClinicCard from '../components/ClinicCard'

const Clinics: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">คลินิกและบริการ</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">ห้องตรวจโรค</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ClinicCard title="ตรวจทั่วไป" desc="ตรวจรักษาโรคทั่วไป, วินิจฉัย, ส่ง LAB, รับยา" />
          <ClinicCard title="คลินิกเฉพาะทาง" desc="โรคเรื้อรัง, หลอดเลือด, หัวใจ" />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">คลินิกทันตกรรม</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ClinicCard title="อุดฟัน" desc="บริการอุดด้วยวัสดุทันสมัย" />
          <ClinicCard title="ถอนฟัน" desc="ถอนด้วยเทคนิคปลอดภัย" />
          <ClinicCard title="ขูดหินปูน / ผ่าฟันคุด" desc="บริการขูดหินปูนและผ่าตัด" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">แพทย์ทางเลือก</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ClinicCard title="คลินิกฝังเข็ม" desc="รักษาอาการปวด, ไมเกรน, ออฟฟิศซินโดรม" />
          <ClinicCard title="นวดแผนไทย" desc="นวดรักษา, นวดผ่อนคลาย (30 นาที)" />
        </div>
      </section>
    </div>
  )
}

export default Clinics
