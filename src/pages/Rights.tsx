import React from 'react'

const Rights: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">สิทธิการรักษา</h1>
      <div className="bg-white p-6 rounded shadow">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>ข้าราชการ ทบ. — สิทธิรักษาตามระเบียบ กรมแพทย์ทหารบก</li>
          <li>ครอบครัวของผู้มีสิทธิ — สมาชิกครอบครัวตามเงื่อนไข</li>
          <li>ผู้ประกันตน (ประกันสังคม) — ตามสิทธิที่กรมกำหนด</li>
          <li>เบิกตรง — สำหรับหน่วยงานที่มีสัญญาเบิกตรง</li>
        </ul>
        <div className="mt-4 text-sm text-gray-600">หากต้องการข้อมูลการเบิกจ่าย โปรดติดต่อฝ่ายธุรการหรือฝ่ายสิทธิการรักษา</div>
      </div>
    </div>
  )
}

export default Rights
