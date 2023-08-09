'use client'
import { ApexChartProps } from '@utils/dashboard'
import dynamic from 'next/dynamic'
import React from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function LineAreaChart({ chartData, chartOptions }: ApexChartProps): React.JSX.Element {
  return (
    <>
      <Chart series={chartData} options={chartOptions} type="area" width="100%" height="250" />
    </>
  )
}
