import React from 'react'

export interface CardProps {
  title: {
    value: string | number
    size: string
    color?: string
  }
  subtitle?: {
    value: string | number
    size: string
  }
  children?: React.ReactNode
}

export interface ApexChartProps {
  chartData: {
    name: string
    data: number[]
  }[]
  chartOptions: {}
}

export interface SearchProps {
  items: {
    id: number
    name: string
  }[]
}
