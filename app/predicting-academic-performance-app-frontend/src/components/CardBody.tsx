import React from 'react'

interface Props {
  children: React.ReactNode
}

export function CardBody({ children }: Props): React.JSX.Element {
  return <>{children}</>
}
