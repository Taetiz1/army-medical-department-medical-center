import React from 'react'

type Props = {
  title: string
  desc?: string
}

const ClinicCard: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-md transition">
      <div className="font-semibold text-med-blue">{title}</div>
      {desc && <div className="text-sm text-gray-600 mt-2">{desc}</div>}
    </div>
  )
}

export default ClinicCard
