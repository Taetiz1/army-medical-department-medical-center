import React from 'react'

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ติดต่อ</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-2">ที่ตั้ง: สถานพยาบาล กรมแพทย์ทหารบก<br />8 ถ.พญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</p>
        <p className="mb-2">โทร: 02-123-4567 (ฝ่ายธุรการ) | 02-123-4568 (นัดหมาย)</p>
        <p className="mb-2">เวลาทำการ: จ.-ศ. 08:00 - 12.00 น. เว้นวันหยุดราชการ</p>
          <div className="mt-4 bg-gray-100 p-3 rounded">
            <iframe
              title="แผนที่ที่ตั้ง สถานพยาบาล กรมแพทย์ทหารบก"
              width="100%"
              height="300"
              className="rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15501.2050860759!2d100.51643729209898!3d13.760696783762652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eb6830113b7%3A0x3f8105cef0adcb51!2z4LiB4Lij4Lih4LmB4Lie4LiX4Lii4LmM4LiX4Lir4Liy4Lij4Lia4LiB!5e0!3m2!1sth!2sth!4v1771333623431!5m2!1sth!2sth"
              loading="lazy"
              aria-label="แผนที่ที่ตั้ง สถานพยาบาล กรมแพทย์ทหารบก"
            ></iframe>
          </div>
      </div>
    </div>
  )
}

export default Contact
