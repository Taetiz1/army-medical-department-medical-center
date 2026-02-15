import React from 'react'

type Props = {
  current: string
  onNavigate: (p: any) => void
}

const Navbar: React.FC<Props> = ({ current, onNavigate }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="logo-sm rounded" />
          <div>
            <div className="font-semibold text-lg">ศูนย์พยาบาล กรมแพทย์ทหารบก</div>
            <div className="text-sm text-gray-500">Army Medical Department Medical Center</div>
          </div>
        </div>
        <nav className="flex gap-3" role="navigation" aria-label="เมนูหลัก">
          <button aria-current={current==='home' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='home'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('home')}>หน้าแรก</button>
          <button aria-current={current==='steps' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='steps'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('steps')}>ขั้นตอน</button>
          <button aria-current={current==='clinics' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='clinics'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('clinics')}>คลินิก</button>
          <button aria-current={current==='rights' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='rights'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('rights')}>สิทธิ</button>
          <button aria-current={current==='after' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='after'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('after')}>หลังการรักษา</button>
          <button aria-current={current==='news' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='news'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('news')}>ข่าว</button>
          <button aria-current={current==='contact' ? 'page' : undefined} className={`px-3 py-2 rounded ${current==='contact'?'bg-army-green text-white':'text-gray-700 hover:bg-gray-100'}`} onClick={()=>onNavigate('contact')}>ติดต่อ</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
