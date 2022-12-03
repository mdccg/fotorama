import { useState, useEffect, useContext } from 'react'

import { Photo } from '../../models/Photo'
import { PhotoService } from '../../service/PhotoService'
import {
  Container,
  FilterInput,
  Loading,
  ResultsArea,
  SearchArea,
  SearchButton,
} from './styles'
import loadingGif from '../../assets/img/loading.gif'
import PhotoCard from '../../components/PhotoCard'
import Pagination from '../../components/Pagination'
import FilterSelect from '../../components/FilterSelect'
import { UserContext } from '../../context/UserContext'
import { SearchOrderBy } from 'unsplash-js'

const Home = () => {
  const { lastSearch, setLastSearch, selectedFilter } = useContext(UserContext)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [filter, setFilter] = useState(lastSearch)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(16)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, isLoading] = useState(false)
  
  const photoService = new PhotoService()

  const searchPhotos = async () => {
    isLoading(true)
    setPhotos([])
    const orderBy = selectedFilter.toLowerCase() as SearchOrderBy
    const photosFound = await photoService.findPhotos(filter, page, perPage, orderBy)
    setLastSearch(filter)
    setPhotos(photosFound.photos)
    setTotalPages(photosFound.totalPages)
    isLoading(false)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchPhotos()
    }
  }

  useEffect(() => {
    if (filter) {
      searchPhotos()
    }
  }, [page, selectedFilter])

  return (
    <Container>
      <SearchArea>
        <FilterSelect />
        <FilterInput
          placeholder='Digite o termo da busca'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyUp={handleKeyUp}
        />

        <SearchButton onClick={() => searchPhotos()}>Buscar</SearchButton>
      </SearchArea>

      <ResultsArea>
        {loading && <Loading src={loadingGif} alt='Carregando resultados' />}

        {photos.length > 0 &&
          photos.map((p) => <PhotoCard key={p.id} photo={p} />)}
      </ResultsArea>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </Container>
  )
}

export default Home
