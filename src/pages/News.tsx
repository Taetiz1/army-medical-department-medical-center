import React from 'react'

const mockNews = [
  { id: 1, title: 'ประกาศวันหยุดทำการในเดือนหน้า', date: '2026-03-01', body: 'ศูนย์พยาบาลจะหยุดให้บริการในวันที่ 12 มีนาคม เนื่องในวันสำคัญ' },
  { id: 2, title: 'นัดหมายล่วงหน้า: วิธีจองออนไลน์', date: '2026-02-10', body: 'แนะนำการใช้ระบบจองคิวออนไลน์ ผ่านหน้าเว็บไซต์หรือโทรศัพท์' },
]

const News: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ข่าวประชาสัมพันธ์</h1>
      <div className="grid gap-3">
        {mockNews.map(n => (
          <article key={n.id} className="bg-white p-4 rounded shadow">
            <div className="text-sm text-gray-500">{n.date}</div>
            <h3 className="font-semibold mt-1">{n.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{(n as any).body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News
