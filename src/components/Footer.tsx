import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row md:justify-between">
        <div>
          <div className="font-semibold">ศูนย์พยาบาล กรมแพทย์ทหารบก</div>
          <div className="text-gray-500">ข้อมูลสำหรับประชาชน</div>
        </div>
        <div className="mt-3 md:mt-0">
          <div>ที่อยู่: อาคาร กรมแพทย์ทหารบก</div>
          <div>โทร: 0x-xxx-xxxx</div>
          <div>เวลาทำการ: จ.-ศ. 08:30 - 16:30</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
