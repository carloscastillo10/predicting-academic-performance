import React from 'react'

interface Props {
  bgColor: string
  children?: React.ReactNode
}

export function Container({ bgColor, children }: Props): React.JSX.Element {
  return (
    <>
      <div className={`relative isolate px-4 py-4 lg:px-6 lg:py-6 ${bgColor} rounded-2xl w-full`}>{children}</div>
    </>
  )
}
