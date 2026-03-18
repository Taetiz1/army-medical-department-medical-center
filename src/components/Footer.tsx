import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-green border-t mt-8 animate-fade-in-up">
      <div className="container mx-auto px-2 md:px-4 py-8 text-base text-gold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {/* Col 1: Logo & Name */}
        <div className="flex flex-col items-center justify-center">
          <img src="/logo-bottom.png" alt="โลโก้สถานพยาบาล กรมแพทย์ทหารบก" className="mb-2 w-full max-w-[160px] md:max-w-[220px] mx-auto" />
          <div className="font-bold text-2xl text-gold drop-shadow mt-2 text-center">สถานพยาบาลกรมแพทย์ทหารบก</div>
          <div className="text-gold/80 mt-1 text-center text-base">เป็นองค์กรทางด้านแพทย์ทหาร ที่เป็นที่เชื่อมั่นของกองทัพ ประชาชน และภูมิภาค</div>
        </div>
        {/* Col 2: Address */}
        <div className="flex flex-col items-start justify-center md:mt-0 mt-6 text-center sm:text-left">
          <div className="font-bold text-lg mb-2">ที่อยู่</div>
          <div>สถานพยาบาล กรมแพทย์ทหารบก</div>
          <div>8 ถ.พญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</div>
          <div className="mt-2">โทร: 02-763-4400</div>
          <div className="mt-2">เวลาทำการ: จ.-ศ. 08:30 - 16:30</div>
        </div>
        {/* Col 3: Contact Channels */}
        <div className="flex flex-col items-start justify-center md:mt-0 mt-6 text-center sm:text-left">
          <div className="font-bold text-lg mb-2">ช่องทางติดต่อ</div>
          <div>อีเมล: info@army-medical.go.th</div>
          <div className="mt-2">Facebook: army.medical</div>
          <div className="mt-2">Line: @army-medical</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
