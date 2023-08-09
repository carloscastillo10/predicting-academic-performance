import React from 'react'

interface Props {
  children: React.ReactNode
}

export function Main({ children }: Props): React.JSX.Element {
  return (
    <>
      <main className="relative isolate min-h-[calc(100vh_-_80px)] mt-20 mx-2 px-6 py-6 lg:px-8 lg:py-8 bg-white rounded-t-3xl">{children}</main>
    </>
  )
}
