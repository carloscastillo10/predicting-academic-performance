import React from 'react'
import Link from 'next/link'

import Image from 'next/image'

export function Nav(): React.JSX.Element {
  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" title="Dashboard">
            <div className="flex items-center gap-2">
              <Image className="h-8 w-auto" src="logo.svg" width={50} height={50} alt="TailWind Logo" />
              <h1 className="text-sm text-white font-extrabold tracking-wide md:text-xl lg:text-2xl leading-[100%]">Predicción del rendimiento académico</h1>
            </div>
          </Link>
        </div>
      </nav>
    </>
  )
}
