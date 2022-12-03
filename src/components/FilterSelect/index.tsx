import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { SelectedFilterEnum } from '../../enums/SelectedFilterEnum'
import { Option, Select } from './styles'

type SelectedFilterEnumKeyType = keyof typeof SelectedFilterEnum

const FilterSelect = () => {
  const { selectedFilter, setSelectedFilter } = useContext(UserContext)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    let selectedFilter = SelectedFilterEnum[value as SelectedFilterEnumKeyType]
    setSelectedFilter(selectedFilter)
  }

  return (
    <Select defaultValue={selectedFilter} onChange={handleChange}>
      <Option value={SelectedFilterEnum.RELEVANT}>Mais relevantes</Option>
      <Option value={SelectedFilterEnum.LATEST}>Mais recentes</Option>
    </Select>
  )
}

export default FilterSelect