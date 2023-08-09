import React, { Fragment, useState } from 'react'
import { Menu } from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { MiniCalendar } from '@components/dashboard/filters/Calendar/MiniCalendar'
import { classNames } from '@utils/funtions'

interface Props {
  active: number
  // eslint-disable-next-line no-unused-vars
  handleClick: (id: number) => void
}

export function Calendar({ active, handleClick }: Props): React.JSX.Element {
  const [openCalendar, setOpenCalendar] = useState(false)

  const handleCalendarClick = () => {
    handleClick(-1)
    setOpenCalendar(!openCalendar)
  }

  return (
    <>
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            <Menu.Button
              key={-1}
              className={classNames(
                active === -1 ? 'bg-custom [&>svg]:text-white' : 'bg-white',
                'relative flex justify-center items-center whitespace-nowrap w-[35px] h-[35px] border-[1px] border-gray-300 hover:bg-custom active:bg-custom focus:bg-custom focus-visible:bg-custom [&>svg]:hover:text-white [&>svg]:focus:text-white [&>svg]:focus-visible:text-white rounded-full',
              )}
              onClick={handleCalendarClick}
            >
              <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </Menu.Button>
            {open && (
              <Menu.Items className="absolute left-[-13.75rem] md:left-[auto] md:left md:right-0 z-50 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    <MiniCalendar selectRange={true} />
                  </Menu.Item>
                </div>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </>
  )
}
