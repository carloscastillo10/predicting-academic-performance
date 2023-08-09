'use client'
import React from 'react'

interface Props {
  data: {
    label: string
    total: number
    percentage: number
    background: string
  }
}

export function Legend({ data }: Props): React.JSX.Element {
  return (
    <>
      <span className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-600">{data.label}</span>
          <span className={`flex justify-center items-center ${data.background} rounded-lg px-1 h-5`}>
            <span className="text-[10px] text-white font-bold">{data.total}</span>
          </span>
        </div>
        <div>
          <span className="text-xl font-bold text-gray-600">{data.percentage}</span>
          <span className="text-sm font-bold">%</span>
        </div>
        <div className="flex bg-legend h-2 rounded-lg">
          <span className={`bar ${data.background} rounded-lg`} />
          <style jsx>{`
            .bar {
              width: ${data.percentage}%;
            }
          `}</style>
        </div>
      </span>
    </>
  )
}
