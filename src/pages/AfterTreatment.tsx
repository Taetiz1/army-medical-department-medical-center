import React from 'react'

const AfterTreatment: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ขั้นตอนหลังการรักษา</h1>

      <div className="bg-white p-6 rounded shadow">
        <p className="mb-3 text-gray-700">หลังการรักษา กรุณาปฏิบัติตามคำแนะนำดังต่อไปนี้เพื่อความปลอดภัยและการฟื้นตัวที่ดี:</p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>รับคำแนะนำจากแพทย์/พยาบาล เกี่ยวกับการดูแลแผลและข้อควรระวัง</li>
          <li>รับยา พร้อมคำแนะนำการใช้ยาและผลข้างเคียงที่อาจเกิดขึ้น</li>
          <li>ชำระเงิน ณ ช่องชำระเงิน (หรือยื่นเอกสารเบิก/เบิกตรงตามสิทธิ)</li>
          <li>นัดหมายติดตามผลหากแพทย์แนะนำ</li>
          <li>ติดต่อสายด่วนหากมีอาการผิดปกติ เช่น มีไข้ หนาวสั่น หรือเลือดไหลไม่หยุด</li>
        </ol>
        <div className="mt-4 text-sm text-gray-600">หมายเหตุ: หากมีข้อสงสัยเพิ่มเติม โปรดติดต่อฝ่ายพยาบาลหรือฝ่ายธุรการ</div>
      </div>
    </div>
  )
}

export default AfterTreatment
