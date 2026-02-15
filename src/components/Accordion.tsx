import React, { useState } from 'react'

const Accordion: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded shadow p-4">
      <button className="w-full text-left flex justify-between items-center" onClick={() => setOpen(o => !o)}>
        <span className="font-semibold">{title}</span>
        <span className="text-gray-500">{open ? '-' : '+'}</span>
      </button>
      {open && <div className="mt-3 text-gray-700">{children}</div>}
    </div>
  )
}

export default Accordion
