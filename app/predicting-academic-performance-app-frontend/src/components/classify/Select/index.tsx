import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSelectFilter } from '@hooks/useSelectFilter'
import { FormikValidationProps, SearchProps, Student, getFormErrors } from '@utils/classify'
import { Search } from '@components/classify/Form/Search'
import { classNames } from '@utils/funtions'
import styles from '@styles/Select.module.css'

interface Props extends SearchProps, FormikValidationProps {
  defaultValue: number
  searchable: boolean
  id: string
  name: string
  placeholder: string
  itemSelected: string
  // eslint-disable-next-line no-unused-vars
  handleChange: (value: string) => void
}

export function SelectForm({ ...props }: Props): React.JSX.Element {
  const { searchValue, setSearchValue, searchedItems } = useSelectFilter({
    items: props.items,
  })

  const items = searchedItems
  return (
    <>
      <Listbox value={props.itemSelected} onChange={props.handleChange} name={props.name}>
        {({ open }) => (
          <div className="relative mt-2">
            <Listbox.Button
              className={classNames(
                getFormErrors(props.errors, props.touched, props.name)
                  ? 'ring-red-600 focus:outline-red-600 focus-visible:ring-red-600'
                  : 'ring-gray-300 focus:ring-2 focus:ring-custom focus-visible:ring-custom',
                `${styles.dropdown_item_selected} w-full flex justify-between items-center rounded-lg py-2 pr-3 text-left text-gray-600 shadow-sm ring-1 sm:text-sm leading-6`,
              )}
              aria-expanded="true"
            >
              {props.itemSelected.toString() !== '-1' ? (
                <span className={classNames('text-gray-700', 'ml-1 block truncate text-sm font-medium px-2.5')}>{props.itemSelected}</span>
              ) : (
                <span className={classNames('text-gray-400', 'ml-1 block truncate text-sm font-medium px-2.5')}>{props.placeholder}</span>
              )}
              <ChevronDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </Listbox.Button>
            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options
                className="scrollbar-show scrollbar-x-hidden absolute z-20 w-full overflow-auto mt-2 rounded-lg bg-white py-1 shadow-2xl max-h-[calc(100vh_-_600px)] focus:ring-1 focus:ring-container"
                id={props.id}
              >
                {props.searchable ? <Search searchValue={searchValue} setSearchValue={setSearchValue} /> : null}
                {!items.length && <span className="text-gray-600 block w-full ml-1 px-3 py-1 font-medium text-sm">No hay concidencias</span>}
                {items?.map((item) => {
                  if (item.id !== -1) {
                    return (
                      <Listbox.Option
                        key={item.id}
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
                    )
                  }
                  return null
                })}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      {props.errors ? (
        props.errors[props.name as keyof Student] && props.touched[props.name as keyof Student] ? (
          <div className="mt-1 text-sm text-red-600 font-medium">{props.errors[props.name as keyof Student]}</div>
        ) : null
      ) : null}
    </>
  )
}

/*
<>
      <Listbox value={selected} onChange={setSelected} name={props.name}>
        {({ open }) => (
          <div className="relative mt-2">
            <Listbox.Button
              className={`${styles.dropdown_item_selected} w-full flex justify-between items-center rounded-lg py-2 pr-3 text-left text-gray-600 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-custom focus-visible:ring-custom sm:text-sm leading-6`}
              aria-expanded="true"
            >
              <span className={classNames(selected?.value ? 'text-gray-700' : 'text-gray-400', 'ml-1 block truncate text-sm font-medium px-2.5')}>{selected?.value ?? props.placeholder}</span>
              <ChevronDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </Listbox.Button>
            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options
                className="scrollbar-show scrollbar-x-hidden absolute z-20 w-full overflow-auto mt-2 rounded-lg bg-white py-1 shadow-lg max-h-[25rem] focus:ring-1 focus:ring-container"
                id={props.id}
              >
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
                        <span className={classNames(active || selected ? 'text-white font-bold' : 'text-gray-600', 'block w-full ml-1 px-3 py-1 font-medium text-sm')}>{item.value}</span>
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
*/
