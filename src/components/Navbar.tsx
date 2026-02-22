import React from 'react'



const Navbar: React.FC<any> = () => {
  const handleNav = (key: string) => {
    window.location.pathname = key === 'home' ? '/' : `/${key}`;
  };
  const current = '';
  return (
    <header className="bg-primary-green shadow animate-fade-in-down">
      <div className="container mx-auto px-2 md:px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img src="/logo.png" alt="logo" className="logo-sm rounded-full bg-white p-1 animate-fade-in" />
          <div>
            <div className="font-bold text-2xl text-gold tracking-wide drop-shadow">สถานพยาบาลกรมแพทย์ทหารบก</div>
            <div className="text-sm text-gold/80">Army Medical Department Medical Center</div>
          </div>
        </div>
        <nav className="flex gap-2" role="navigation" aria-label="เมนูหลัก">
          {[
            {key:'home',label:'หน้าแรก'},
            {key:'steps',label:'ขั้นตอน'},
            {key:'clinics',label:'คลินิก'},
            {key:'rights',label:'สิทธิ'},
            {key:'after',label:'หลังการรักษา'},
            {key:'news',label:'ข่าว'},
            {key:'faq',label:'FAQ'},
            {key:'contact',label:'ติดต่อ'}
          ].map(item => (
            <button
              key={item.key}
              aria-current={current===item.key ? 'page' : undefined}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200
                ${current===item.key ? 'bg-gold text-dark shadow-md scale-105' : 'text-white hover:bg-gold/80 hover:text-dark hover:scale-105'}`}
              onClick={()=>handleNav(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar
