import React, { useState } from 'react';

/* ─── Theme Colors ─── */
const T = {
  green:       '#2d6a4f',
  greenDark:   '#1b4332',
  greenLight:  '#e8f5ee',
  greenLightHeader:  '#c8e6d4',
  greenMid:    '#52b788',
  greenBorder: '#b7d5c4',
  gold:        '#c9a84c',
  goldLight:   '#fdf6e3',
  goldBorder:  '#e8d08a',
  connector:   '#74c69d',
  text:        '#1b3a2d',
  white:       '#ffffff',
};

/* ─── Section content ─── */
const sections = [
  {
    num: '๑',
    title: 'ภารกิจ',
    content: (
      <p style={{ color: T.text }} className="text-sm leading-relaxed">
        ให้บริการทางการแพทย์กับกำลังพล พบ. และครอบครัว ตลอดจนหน่วยทหารอื่นในพื้นที่ที่ขอรับการสนับสนุน
        และบุคคลพลเรือนทั่วไปตามความจำเป็น
      </p>
    ),
  },
  {
    num: '๒',
    title: 'การจัด',
    content: (
      <p style={{ color: T.text }} className="text-sm leading-relaxed">
        เป็นหน่วยงานเฉพาะกิจในอัตรา บก.พบ. มี หน.สถานพยาบาล พบ. เป็นผู้บังคับบัญชารับผิดชอบ
      </p>
    ),
  },
  {
    num: '๓',
    title: 'ขอบเขตอำนาจหน้าที่และความรับผิดชอบ',
    content: (
      <div className="space-y-4 text-sm" style={{ color: T.text }}>
        <div>
          <p className="font-semibold mb-2" style={{ color: T.green }}>
            ๓.๑ ให้ข้อเสนอแนะ วางแผน อำนวยการ ประสานงาน กำกับดูแล และดำเนินการ
          </p>
          <div className="pl-4 space-y-2" style={{ borderLeft: `2px solid ${T.greenBorder}` }}>
            <p><span className="mr-2" style={{ color: T.greenMid }}>๓.๑.๑</span>จัดการบริการตรวจรักษาโรคทางเวชกรรม บริการทันตกรรม และบริการการแพทย์ทางเลือก ให้กับกำลังพล พบ. และครอบครัว ตลอดจนประชาชนทั่วไปและหน่วยงานในพื้นที่บริเวณใกล้เคียง</p>
            <p><span className="mr-2" style={{ color: T.greenMid }}>๓.๑.๒</span>จัดการตรวจและประเมินสุขภาพให้กับกำลังพล ทบ. ผู้ทำการในอากาศยาน</p>
            <p><span className="mr-2" style={{ color: T.greenMid }}>๓.๑.๓</span>จัดชุดเฉพาะกิจสนับสนุนการบริการทางการแพทย์ในการปฏิบัติภารกิจของ พบ. ตามที่ได้รับมอบหมาย</p>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-2" style={{ color: T.green }}>
            ๓.๒ ให้ข้อเสนอแนะ ประสานงาน และดำเนินการ
          </p>
          <div className="pl-4 space-y-2" style={{ borderLeft: `2px solid ${T.greenBorder}` }}>
            <p><span className="mr-2" style={{ color: T.greenMid }}>๓.๒.๑</span>ส่งเสริมสุขภาพและป้องกันโรคให้กับกำลังพล พบ. และครอบครัว ตามที่ได้รับมอบหมาย</p>
            <p><span className="mr-2" style={{ color: T.greenMid }}>๓.๒.๒</span>จัดการบริการทางการแพทย์เพื่อสงเคราะห์กำลังพล พบ. และครอบครัวที่ทุพพลภาพ</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            ['๓.๓', 'ประสานการส่งกลับสายแพทย์จากพื้นที่ พบ. ไปยัง รพ.รร.๖'],
            ['๓.๔', 'สนับสนุนการวิจัยและการฝึกอบรมตามที่ได้รับมอบหมาย'],
            ['๓.๕', 'ปฏิบัติภารกิจอื่นๆ ตามที่ได้รับมอบหมายจาก จก.พบ.'],
          ].map(([num, text]) => (
            <p key={num}>
              <span className="font-semibold mr-2" style={{ color: T.green }}>{num}</span>{text}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '๔',
    title: 'การจัดส่วนงาน',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          ['๔.๑', 'แผนกธุรการ', 'ผธก.'],
          ['๔.๒', 'แผนกสนับสนุน', 'ผสน.'],
          ['๔.๓', 'แผนกตรวจโรค', 'ผตร.'],
          ['๔.๔', 'แผนกทันตกรรม', 'ผทก.'],
          ['๔.๕', 'แผนกส่งเสริมสุขภาพ', 'ผสส.'],
          ['๔.๖', 'แผนกเภสัชกรรม', 'ผภก.'],
          ['๔.๗', 'แผนกตรวจวิเคราะห์ทางห้องปฏิบัติการและรังสีวินิจฉัย', 'ผตป.'],
        ].map(([num, name, abbr]) => (
          <div
            key={num}
            className="flex items-center gap-3 py-2 px-3 rounded-lg"
            style={{ background: T.greenLight, border: `1px solid ${T.greenBorder}` }}
          >
            <span className="text-xs w-6 shrink-0" style={{ color: T.greenMid }}>{num}</span>
            <span className="text-sm flex-1" style={{ color: T.text }}>{name}</span>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{ background: T.white, color: T.green, border: `1px solid ${T.goldBorder}`, fontWeight: 600 }}
            >
              {abbr}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

/* ─── Org Chart ─── */
const Box = ({ x, y, w = 130, h = 40, label, type = 'dept' }) => {
  const styles = {
    board: { fill: T.green,      stroke: T.green,    text: T.white,  fw: '600', fs: 12 },
    hq:    { fill: T.greenLight, stroke: T.greenMid, text: T.text,   fw: '600', fs: 12 },
    dept:  { fill: T.white,      stroke: T.gold,     text: T.text,   fw: '500', fs: 11 },
    sub:   { fill: T.goldLight,  stroke: T.gold,     text: T.text,   fw: '400', fs: 10 },
  };
  const s = styles[type];
  return (
    <g>
      <rect x={x - w / 2} y={y} width={w} height={h} rx={7} ry={7}
        fill={s.fill} stroke={s.stroke} strokeWidth={type === 'board' ? 0 : 1.5} />
      {type === 'board' && (
        <rect x={x - w / 2} y={y + h - 4} width={w} height={4} rx={0} fill={T.gold} />
      )}
      <text x={x} y={y + h / 2} textAnchor="middle" dominantBaseline="middle"
        fontSize={s.fs} fontWeight={s.fw} fill={s.text}
        style={{ fontFamily: 'Sarabun, sans-serif' }}>
        {label}
      </text>
    </g>
  );
};

const Line = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={T.connector} strokeWidth={1.5} strokeLinecap="round" />
);

const OrgChart = () => {
  const boardW = 240, boardH = 44;
  const hqW = 160, hqH = 42;
  const deptW = 76, deptH = 38;
  const subW = 128, subH = 36;
  const cx = 430;
  const boardY = 12, hqY = 96, deptY = 196, subY = 286, sub2Y = 336;

  const depts = [
    { x: 90,  label: 'ผธก.' },
    { x: 192, label: 'ผสน.' },
    { x: 302, label: 'ผตร.' },
    { x: 412, label: 'ผทก.' },
    { x: 530, label: 'ผสส.' },
    { x: 636, label: 'ผภก.' },
    { x: 742, label: 'ผตป.' },
  ];

  const connY = hqY + hqH + 30;
  const leftX = depts[0].x, rightX = depts[depts.length - 1].x;
  const trX = depts[2].x, tkX = depts[3].x;
  const subTrX = trX - 10, subTkX = tkX + 10;

  return (
    <svg viewBox="0 0 840 400" width="100%" style={{ minWidth: 600 }}>
      <Box x={cx} y={boardY} w={boardW} h={boardH} label="คณะกรรมการอำนวยการสถานพยาบาล พบ." type="board" />
      <Line x1={cx} y1={boardY + boardH} x2={cx} y2={hqY} />
      <Box x={cx} y={hqY} w={hqW} h={hqH} label="สถานพยาบาล พบ." type="hq" />
      <Line x1={cx} y1={hqY + hqH} x2={cx} y2={connY} />
      <Line x1={leftX} y1={connY} x2={rightX} y2={connY} />
      {depts.map((d, i) => (
        <g key={i}>
          <Line x1={d.x} y1={connY} x2={d.x} y2={deptY} />
          <Box x={d.x} y={deptY} w={deptW} h={deptH} label={d.label} type="dept" />
        </g>
      ))}
      <Line x1={trX} y1={deptY + deptH} x2={trX} y2={subY - 12} />
      <Line x1={subTrX} y1={subY - 12} x2={trX} y2={subY - 12} />
      <Line x1={subTrX} y1={subY - 12} x2={subTrX} y2={subY} />
      <Box x={subTrX} y={subY} w={subW} h={subH} label="คลินิกเวชกรรม" type="sub" />
      <Line x1={subTrX} y1={subY + subH} x2={subTrX} y2={sub2Y} />
      <Box x={subTrX} y={sub2Y} w={subW + 10} h={subH} label="คลินิกแพทย์ทางเลือก" type="sub" />
      <Line x1={tkX} y1={deptY + deptH} x2={tkX} y2={subY - 12} />
      <Line x1={tkX} y1={subY - 12} x2={subTkX} y2={subY - 12} />
      <Line x1={subTkX} y1={subY - 12} x2={subTkX} y2={subY} />
      <Box x={subTkX} y={subY} w={subW} h={subH} label="คลินิกทันตกรรม" type="sub" />
    </svg>
  );
};

/* ─── Accordion Item ─── */
const AccordionItem = ({ num, title, children, isOpen, onToggle }) => (
  <div
    className="rounded-xl overflow-hidden"
    style={{
      background: T.white,
      boxShadow: isOpen ? `0 2px 14px 0 ${T.greenBorder}88` : 'none',
      transition: 'box-shadow 0.2s',
    }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
      style={{ background: isOpen ? T.greenLightHeader : T.white }}
    >
      <span
        className="text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shrink-0"
        style={{
          background: isOpen ? T.green : T.greenLight,
          color: isOpen ? T.white : T.greenMid,
          border: `1.5px solid ${isOpen ? T.green : T.greenBorder}`,
          transition: 'all 0.2s',
        }}
      >
        {num}
      </span>
      <span className="font-semibold flex-1 text-sm" style={{ color: isOpen ? T.green : T.text }}>
        {title}
      </span>
      <span
        className="text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full select-none"
        style={{
          color: T.gold,
          transform: isOpen ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.2s',
          lineHeight: 1,
        }}
      >
        +
      </span>
    </button>

    {isOpen && (
      <div style={{ borderTop: `1px solid ${T.greenBorder}` }}>
        <div className="px-5 pb-5 pt-4" style={{ paddingLeft: '4.5rem' }}>
          {children}
        </div>
      </div>
    )}
  </div>
);

/* ─── Org Chart Modal ─── */
const OrgChartModal = ({ onClose }) => (
    <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        style={{ background: 'rgb(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
    >
        <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
            maxWidth: 960,
            background: T.white,
            boxShadow: `0 24px 64px rgba(27,67,50,0.4)`,
        }}
        onClick={e => e.stopPropagation()}
        >
        {/* Modal header */}
        <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: T.green }}
        >
            <span className="font-bold text-sm" style={{ color: T.white }}>โครงสร้างการจัด — สถานพยาบาล พบ.</span>
            <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 text-2xl font-bold transition-opacity hover:opacity-70"
            style={{ color: T.goldLight }}
            >
            ×
            </button>
        </div>
        {/* Chart — full size */}
        <div className="p-6 overflow-x-auto" style={{ background: '#f0f7f3' }}>
            <OrgChart />
        </div>
        </div>
    </div>
);

/* ─── Main Page ─── */
const OrgMission = () => {
  const [open, setOpen] = useState({ '๑': true, '๒': true, '๓': true, '๔': true, '๕': true });
  const [showModal, setShowModal] = useState(false);
  const toggle = (num) => setOpen(prev => ({ ...prev, [num]: !prev[num] }));

  return (
    <div style={{ fontFamily: "'Sarabun', sans-serif", background: '#f0f7f3', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Modal */}
      {showModal && <OrgChartModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <div style={{ background: T.green, borderBottom: `4px solid ${T.gold}` }}>
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-5 rounded-full" style={{ background: T.gold }} />
            <span className="text-xs tracking-widest" style={{ color: T.goldBorder }}>
              สถานพยาบาล พบ.
            </span>
          </div>
          <h1 className="text-xl font-bold pl-4" style={{ color: T.white }}>
            ภารกิจและการแบ่งมอบความรับผิดชอบ
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-6 space-y-3">
        {sections.map((s) => (
          <AccordionItem
            key={s.num}
            num={s.num}
            title={s.title}
            isOpen={open[s.num]}
            onToggle={() => toggle(s.num)}
          >
            {s.content}
          </AccordionItem>
        ))}

        <AccordionItem
          num="๕"
          title="โครงสร้างการจัด"
          isOpen={open['๕']}
          onToggle={() => toggle('๕')}
        >
          <div className="overflow-x-auto -ml-10 relative">
            {/* Click overlay to open modal */}
            <div
              className="relative group cursor-zoom-in"
              onClick={() => setShowModal(true)}
            >
              <OrgChart />
              {/* Hover hint */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(27,67,50,0.08)' }}
              >
                <span
                  className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
                  style={{ background: T.green, color: T.white, boxShadow: '0 4px 16px rgba(27,67,50,0.3)' }}
                >
                  <span style={{ fontSize: 16 }}>⛶</span> คลิกเพื่อขยาย
                </span>
              </div>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default OrgMission;