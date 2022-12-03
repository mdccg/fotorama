import { CurrentPage, NavigationArea, NavigationButton } from './styles'

type PaginationProps = {
  page: number
  setPage: (newValue: number) => void
  totalPages: number
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => (
  <>
    {totalPages > 1 && (
      <NavigationArea>
        {page > 1 && (
          <NavigationButton onClick={() => setPage(page - 1)}>
            Página anterior
          </NavigationButton>
        )}

        <CurrentPage>
          Página {page} de {totalPages}
        </CurrentPage>

        {page < totalPages && (
          <NavigationButton onClick={() => setPage(page + 1)}>
            Próxima página
          </NavigationButton>
        )}
      </NavigationArea>
    )}
  </>
)

export default Pagination