'use client'
import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from '@styles/Select.module.css'
import { Search } from '@components/dashboard/Search'
import { useSelectFilter } from '@hooks/useSelectFilter'
import { SearchProps } from '@utils/dashboard'
import { classNames } from '@utils/funtions'

interface Props extends SearchProps {
  defaultValue: number
  searchable?: boolean
}

export function SelectFilter({ ...props }: Props): React.JSX.Element {
  const { searchValue, setSearchValue, searchedItems } = useSelectFilter({
    items: props.items,
  })

  const items = searchedItems

  const [selected, setSelected] = useState(items[props.defaultValue])
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="relative mt-2">
            <Listbox.Button
              className={`${styles.dropdown_item_selected} flex justify-center items-center rounded-lg bg-white py-1.5 pr-3 text-left text-gray-600 shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-custom sm:text-sm sm:leading-6`}
              aria-expanded="true"
            >
              <span className="ml-1 block truncate text-sm text-gray-600 font-bold px-3">{selected.name}</span>
              <ChevronDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </Listbox.Button>
            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="scrollbar-show scrollbar-x-hidden absolute z-20 min-w-[6rem] md:max-w-[13rem] lg:max-w-[13.5rem] max-h-[25rem] overflow-auto mt-1 rounded-2xl bg-white py-1 shadow-lg focus:ring-2 focus:ring-container">
                {props.searchable ? <Search searchValue={searchValue} setSearchValue={setSearchValue} /> : null}
                {!items.length && <span className="text-gray-600 block w-full ml-1 px-3 py-1 font-medium text-sm">No hay concidencias</span>}
                {items?.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ selected, active }) =>
                      classNames(selected || active ? 'bg-custom rounded-lg w-full text-white' : 'text-white', 'relative cursor-pointer flex justify-between items-center')
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(active || selected ? 'text-white font-bold' : 'text-gray-600', 'block w-full ml-1 px-3 py-1 font-medium text-sm')}>{item.name}</span>
                        {selected ? <CheckIcon className="h-5 w-5 mr-3" aria-hidden="true" /> : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </>
  )
}
