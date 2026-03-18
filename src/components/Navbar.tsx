import React from 'react'

const NAV_ITEMS = [
  { key: 'home', label: 'หน้าหลัก' },
  { key: 'org', label: 'โครงสร้าง/ภารกิจ' },
  { key: 'news', label: 'ข่าวประชาสัมพันธ์' },
  { key: 'faq', label: 'FAQ' },
  { key: 'contact', label: 'ติดต่อ' },
];

const Navbar: React.FC<any> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNav = (key: string) => {
    setMenuOpen(false);
    window.location.pathname = key === 'home' ? '/' : `/${key}`;
  };
  const current = '';

  return (
    <header className="bg-primary-green shadow animate-fade-in-down">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="logo-sm rounded-full bg-white p-1 animate-fade-in" />
          <div>
            <div className="font-bold text-xl md:text-2xl text-gold tracking-wide drop-shadow">สถานพยาบาลกรมแพทย์ทหารบก</div>
            <div className="text-xs md:text-xl text-gold/80">Army Medical Department Medical Center</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-wrap justify-end gap-1 md:gap-2" role="navigation" aria-label="เมนูหลัก">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              aria-current={current === item.key ? 'page' : undefined}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-base
                ${current === item.key ? 'bg-gold text-dark shadow-md scale-105' : 'text-white hover:bg-gold/80 hover:text-dark hover:scale-105'}`}
              onClick={() => handleNav(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="เปิดเมนู"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary-green border-t border-white/10 px-4 pb-4 flex flex-col gap-1" role="navigation" aria-label="เมนูหลักมือถือ">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              aria-current={current === item.key ? 'page' : undefined}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-base
                ${current === item.key ? 'bg-gold text-dark' : 'text-white hover:bg-gold/80 hover:text-dark'}`}
              onClick={() => handleNav(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar
