import { handleKeyDown } from '@utils/funtions'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export function Search({ searchValue, setSearchValue }: Props): React.JSX.Element {
  const handleChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="grid">
        <input
          type="text"
          className="mt-2 bg-search text-gray-600 caret-custom block mx-1 px-3 py-1 mb-2 font-medium text-sm rounded-lg focus:outline-container h-[35px] md:w-[189px] lg:w-[202px]"
          value={searchValue}
          onChange={handleChangeSearchValue}
          onKeyDown={handleKeyDown}
          placeholder="Buscar"
        />
      </div>
    </>
  )
}
