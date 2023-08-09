import { SearchProps } from '@utils/dashboard'
import { useState } from 'react'

export function useSelectFilter({ items }: SearchProps) {
  const [searchValue, setSearchValue] = useState('')
  let searchedItems = [...items]

  if (searchedItems.length > 0) {
    searchedItems = items.filter((item) => {
      const itemValueLowerCase = item.name.toLowerCase()
      const searchValueLowerCase = searchValue.toLowerCase()
      return itemValueLowerCase.includes(searchValueLowerCase)
    })
  }

  return { searchValue, setSearchValue, searchedItems }
}
