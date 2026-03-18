import React from 'react'

const PREVIEW_COUNT = 3
const SLIDES = [
  '/slide-img/slide.jpg',
  '/slide-img/content.jpg',
]

/** Hook: reveal elements on scroll using IntersectionObserver */
function useScrollReveal() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          // stagger children
          el.querySelectorAll('.scroll-reveal-child').forEach((child, i) => {
            setTimeout(() => child.classList.add('revealed'), i * 120);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Home: React.FC = () => {
  type NewsType = { id: number; folder: string; title: string; date?: string; };
  const [news, setNews] = React.useState<NewsType[]>([]);
  const [current, setCurrent] = React.useState(0);

  const [showMemorial, setShowMemorial] = React.useState(true);
  const dismissMemorial = () => {
    setShowMemorial(false);
  };

  React.useEffect(() => {
    fetch('/news-data.json')
      .then(res => res.json())
      .then(setNews);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleNews = news.slice(0, PREVIEW_COUNT);
  const hasMore = news.length > PREVIEW_COUNT;

  const newsRef = useScrollReveal();
  const clinicsRef = useScrollReveal();
  const aboutRef = useScrollReveal();

  return (
    <div className="relative overflow-hidden">

      {/* ===== Memorial Modal ===== */}
      {showMemorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" onClick={dismissMemorial}>
          <div
            className="relative rounded-2xl shadow-2xl max-w-3xl w-[95%] md:w-[85%] mx-auto overflow-hidden border border-gold/30 animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img src="/memory-bg.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Gold accent top bar */}
            <div className="relative z-10 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="relative z-10 flex flex-col items-center px-6 md:px-12 pt-10 pb-8 text-center">
              {/* Top text */}
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-4">ขอพระองค์เสด็จสู่สวรรคาลัย</p>

              {/* Portrait */}
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold/60 shadow-2xl mb-6 ring-4 ring-gold/20">
                <img src="/queen.jpg" alt="สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง" className="w-full h-full object-cover" />
              </div>

              {/* Main heading */}
              <p className="text-gold text-xl md:text-2xl font-bold mb-3">น้อมรำลึกในพระมหากรุณาธิคุณ</p>
              <p className="text-white text-base md:text-lg leading-relaxed mb-1">
                สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                พระบรมราชชนนีพันปีหลวง
              </p>

              {/* Divider */}
              <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mb-6" />

              {/* Bottom text */}
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-1">ด้วยเกล้าด้วยกระหม่อมขอเดชะ</p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                ข้าพระพุทธเจ้า ข้าราชการ พนักงานข้าราชการ และลูกจ้างกรมแพทย์ทหารบก
              </p>

              {/* Dismiss button */}
              <button
                onClick={dismissMemorial}
                className="px-10 py-2.5 rounded-full bg-gold/80 border border-gold/40 text-white text-base font-semibold transition-all duration-300"
              >
                ปิด
              </button>
            </div>

            {/* Gold accent bottom bar */}
            <div className="relative z-10 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>
      )}

      {/* Decorative background blobs */}

      {/* ===== Slideshow ===== */}
      <section className="rounded-2xl mb-10 overflow-hidden shadow-xl animate-fade-in relative z-10">
        <div className="relative w-full h-64 md:h-96 bg-black">
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`slide-${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <button
            onClick={() => setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => setCurrent(prev => (prev + 1) % SLIDES.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white w-6 h-2.5' : 'bg-white/40 w-2.5 h-2.5'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ข่าวประชาสัมพันธ์ ===== */}
      <div ref={newsRef} className="scroll-reveal relative z-10">
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-8 bg-primary-green rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900">ข่าวประชาสัมพันธ์</h2>
          </div>

          {news.length === 0 ? (
            <p className="text-gray-400 text-sm">ไม่มีข่าวประชาสัมพันธ์ในขณะนี้</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleNews.map((n, idx) => (
                <a
                  key={n.id}
                  href={`/news/${n.id}`}
                  className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="relative overflow-hidden h-36">
                    <img
                      src={`/news-img/${n.folder}/slide.jpg`}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-3">
                    <p className="text-base font-semibold text-gray-800 line-clamp-2 leading-snug">{n.title}</p>
                    {n.date && <p className="text-sm text-gray-400 mt-1">{n.date}</p>}
                  </div>
                </a>
              ))}

              {hasMore && (
                <a
                  href="/news"
                  className="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary-green/40 hover:border-primary-green hover:bg-primary-green/5 transition-all duration-300 min-h-[10rem] gap-2 animate-fade-in-up"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-green/10 group-hover:bg-primary-green/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                  <span className="text-base font-semibold text-primary-green">ดูทั้งหมด</span>
                  <span className="text-sm text-gray-400">{news.length} รายการ</span>
                </a>
              )}
            </div>
          )}
        </section>
      </div>

      {/* ===== คลินิกและบริการ ===== */}
      <div ref={clinicsRef} className="scroll-reveal relative z-10">
        <section className="mb-10" id="clinics">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-8 bg-gold rounded-full" />
            <h2 className="text-3xl font-semibold text-gray-900">คลินิกและบริการ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <a href="/clinics#general" className="scroll-reveal-child group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-blue-100 block">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-blue-300 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 backdrop-blur-sm" style={{ background: 'rgba(30,64,175,0.78)', clipPath: 'polygon(28px 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                <div className="pl-8 pr-3 pt-2.5 pb-2">
                  <p className="text-white font-bold text-base leading-snug">ห้องตรวจโรค</p>
                  <p className="text-blue-200 text-xs mt-0.5">ตรวจรักษาโรคทั่วไป, วินิจฉัย, LAB, รับยา</p>
                </div>
              </div>
            </a>

            <a href="/clinics#dental" className="scroll-reveal-child group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-teal-100 block">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-teal-300 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3C7 3 5 5 5 8c0 4 2 7 4 9h6c2-2 4-5 4-9 0-3-2-5-4-5-1 0-2 .5-2.5 1.5C12 4.5 13 4 14 4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6M9 9h6" /></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 backdrop-blur-sm" style={{ background: 'rgba(13,94,89,0.78)', clipPath: 'polygon(28px 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                <div className="pl-8 pr-3 pt-2.5 pb-2">
                  <p className="text-white font-bold text-base leading-snug">คลินิกทันตกรรม</p>
                  <p className="text-teal-200 text-xs mt-0.5">อุดฟัน, ถอนฟัน, ขูดหินปูน</p>
                </div>
              </div>
            </a>

            <a href="/clinics#alternative" className="scroll-reveal-child group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-green-100 block">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-green-300 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 backdrop-blur-sm" style={{ background: 'rgba(20,83,45,0.78)', clipPath: 'polygon(28px 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                <div className="pl-8 pr-3 pt-2.5 pb-2">
                  <p className="text-white font-bold text-base leading-snug">แพทย์ทางเลือก</p>
                  <p className="text-green-200 text-xs mt-0.5">ฝังเข็ม, นวดแผนไทย</p>
                </div>
              </div>
            </a>

            <a href="/clinics" className="scroll-reveal-child group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gray-100 block">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-gray-300 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 10h16M4 14h16M4 18h7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 16l3 3 5-5" /></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 backdrop-blur-sm" style={{ background: 'rgba(55,65,81,0.78)', clipPath: 'polygon(28px 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                <div className="pl-8 pr-3 pt-2.5 pb-2">
                  <p className="text-white font-bold text-base leading-snug">ดูบริการทั้งหมด</p>
                  <p className="text-gray-300 text-sm mt-0.5">คลินิกและหน่วยบริการ</p>
                </div>
              </div>
            </a>

          </div>
        </section>
      </div>

      {/* ===== เกี่ยวกับสถานพยาบาล ===== */}
      <div ref={aboutRef} className="scroll-reveal relative z-10">
        <section className="mb-6" id="info">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-8 bg-accent-green rounded-full" />
            <h2 className="text-3xl font-semibold text-gray-900">เกี่ยวกับสถานพยาบาล</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">

            <a href="/org" className="scroll-reveal-child group flex flex-col gap-2">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-slate-500 to-slate-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/50 group-hover:scale-110 group-hover:text-white/70 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
              </div>
              <span className="text-base font-bold text-gray-700 group-hover:text-primary-green transition-colors text-center">วิสัยทัศน์/พันธกิจ</span>
            </a>

            <a href="/org#management" className="scroll-reveal-child group flex flex-col gap-2">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-gray-600 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/50 group-hover:scale-110 group-hover:text-white/70 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
              </div>
              <span className="text-base font-bold text-gray-700 group-hover:text-primary-green transition-colors text-center">ผู้บริหาร</span>
            </a>

            <a href="/news" className="scroll-reveal-child group flex flex-col gap-2">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-primary-green/60 to-primary-green">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/60 group-hover:scale-110 group-hover:text-white/80 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
              </div>
              <span className="text-base font-bold text-gray-700 group-hover:text-primary-green transition-colors text-center">ข้อมูลข่าวสารการดำเนินงาน</span>
            </a>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Home