import React from 'react'
import { CardProps } from '@utils/dashboard'

export function CardTitle({ title, subtitle }: CardProps): React.JSX.Element {
  return (
    <>
      <h2 className={`${title.color || 'text-gray-950'} ${title.size} font-bold`}>{title.value}</h2>
      {subtitle && <p className={`text-gray-600 ${subtitle?.size} font-medium`}>{subtitle?.value}</p>}
    </>
  )
}
