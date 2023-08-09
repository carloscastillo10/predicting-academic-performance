import React from 'react'

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
  const allowedHeadlessUIKeys = [
    'ArrowUp',
    'ArrowDown',
    'Enter',
    ' ', // Space Key
    'Home',
    'End',
    'Escape',
  ]
  if (allowedHeadlessUIKeys.includes(event.key)) {
    event.stopPropagation()
  }
}
