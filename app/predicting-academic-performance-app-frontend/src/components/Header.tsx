import React from 'react'
import { Nav } from 'common/Nav'

export function Header(): React.JSX.Element {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
      </header>
    </>
  )
}
