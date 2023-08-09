import React from 'react'
import { CardTitle } from '@components/CardTitle'
import { CardProps } from '@utils/dashboard'

export function CardHeader({ title, subtitle }: CardProps): React.JSX.Element {
  return (
    <>
      <CardTitle title={title} subtitle={subtitle} />
    </>
  )
}
