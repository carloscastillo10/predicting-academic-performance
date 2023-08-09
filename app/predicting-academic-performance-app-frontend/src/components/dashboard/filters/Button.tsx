'use client'
import { classNames } from '@utils/funtions'
import React from 'react'

interface Props {
  text: string
  id: number
  active: number
  // eslint-disable-next-line no-unused-vars
  handleClick: (id: number) => void
}

export function ButtonFilter({ ...props }: Props): React.JSX.Element {
  return (
    <button
      className={classNames(
        props.active === props.id ? 'bg-custom text-white font-bold' : 'font-medium text-gray-600',
        'inline-flex justify-center items-center whitespace-nowrap w-16 h-[35px] hover:bg-custom active:bg-custom focus:bg-custom focus-visible:bg-custom text-sm hover:text-white active:text-white focus:text-white focus-visible:text-white hover:font-bold active:font-bold focus:font-bold focus-visible:font-bold rounded-full px-3 py-1',
      )}
      onClick={() => props.handleClick(props.id)}
    >
      {props.text}
    </button>
  )
}
