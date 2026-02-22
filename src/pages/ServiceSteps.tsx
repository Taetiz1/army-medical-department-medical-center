import React from 'react'
import StepFlow from '../components/StepFlow'
// import flowchart from '../assets/flowchart.svg'

const steps = [
  { title: 'ผู้มารับบริการใหม่ / นัดเดิม', desc: 'ลงทะเบียนหรือยืนยันการนัด' },
  { title: 'คัดกรองสิทธิ', desc: 'ตรวจสอบหน่วยงาน/ประกัน' },
  { title: 'วัด V/S', desc: 'วัดความดัน ชีพจร อุณหภูมิ' },
  { title: 'เข้าคลินิก', desc: 'พบแพทย์/พยาบาล' },
  { title: 'รับยา/ชำระเงิน', desc: 'รับคำแนะนำและกลับบ้าน' },
]

const ServiceSteps: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ขั้นตอนการรับบริการ</h1>

      <div className="bg-white p-6 rounded shadow">
        {/* Desktop: show flowchart image; Mobile: show step timeline */}
        <div className="hidden md:block">
          {/* <img src={flowchart} alt="flowchart" className="w-full h-auto rounded" /> */}
        </div>

        <div className="block md:hidden">
          <StepFlow steps={steps} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">รูปแบบการนำเสนอ</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Desktop: แสดงภาพ Flowchart ขนาดเต็ม</li>
          <li>Mobile: แสดงเป็น Step Timeline ทีละขั้นตอน</li>
          <li>แผนระยะยาว: ทำ interactive flow หรือ PDF ดาวน์โหลด</li>
        </ul>
      </div>
    </div>
  )
}

export default ServiceSteps
