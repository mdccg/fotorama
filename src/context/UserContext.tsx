import { createContext, ReactNode, useState } from 'react'
import { SelectedFilterEnum } from '../enums/SelectedFilterEnum'

type UserContextType = {
  selectedFilter: SelectedFilterEnum
  setSelectedFilter: (newValue: SelectedFilterEnum) => void
  lastSearch: string
  setLastSearch: (newValue: string) => void
}

const initialValue: UserContextType = {
  selectedFilter: SelectedFilterEnum.RELEVANT,
  setSelectedFilter: () => {},
  lastSearch: '',
  setLastSearch: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterEnum>(initialValue.selectedFilter)
  const [lastSearch, setLastSearch] = useState<string>(initialValue.lastSearch)

  return (
    <UserContext.Provider value={{ selectedFilter, setSelectedFilter, lastSearch, setLastSearch }}>
      {children}
    </UserContext.Provider>
  )
}