import React from 'react'

type Step = {
  title: string
  desc?: string
}

const StepFlow: React.FC<{steps: Step[]}> = ({ steps }) => {
  return (
    <div className="space-y-4">
      {steps.map((s, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">{i+1}</div>
          <div>
            <div className="font-semibold">{s.title}</div>
            {s.desc && <div className="text-sm text-gray-600">{s.desc}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StepFlow
