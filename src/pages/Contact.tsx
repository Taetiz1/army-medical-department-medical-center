import React from 'react'

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ติดต่อ</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-2">ที่ตั้ง: อาคารศูนย์พยาบาล กรมแพทย์ทหารบก, แขวง/เขต, กรุงเทพฯ</p>
        <p className="mb-2">โทร: 02-123-4567 (ฝ่ายธุรการ) | 02-123-4568 (นัดหมาย)</p>
        <p className="mb-2">เวลาทำการ: จ.-ศ. 08:30 - 16:30</p>
          <div className="mt-4 bg-gray-100 p-3 rounded">
            <iframe
              title="แผนที่ที่ตั้ง ศูนย์พยาบาล กรมแพทย์ทหารบก"
              width="100%"
              height="300"
              className="rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.000000000000!2d100.000000000000!3d13.000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4Liy4LiB4Lij4LiZ!5e0!3m2!1sth!2sth!4v0000000000000"
              loading="lazy"
              aria-label="แผนที่ที่ตั้ง ศูนย์พยาบาล กรมแพทย์ทหารบก"
            ></iframe>
          </div>
      </div>
    </div>
  )
}

export default Contact
