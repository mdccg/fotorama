import { Location, useLocation } from 'react-router-dom'
import { BackButton, BackButtonIcon, BackButtonLabel, InfoPanel, PhotoCreationDate, PhotoDescription, PhotoDetails, PhotoFrame, PhotoImage } from './styles'
import { Photo } from '../../models/Photo'
import ArrowLeftSolid from '../../assets/icons/arrow-left-solid.svg'

type StateType = {
  photo: Photo
}

const PhotoView = () => {
  const location: Location = useLocation()
  const state: StateType | null = location.state

  if (state === null) {
    window.location.href = '/'
    return
  }

  const { regularUrl, description, creationDate } = state.photo

  return (
    <PhotoDetails>
      <PhotoFrame>
        <BackButton to='/'>
          <BackButtonIcon src={ArrowLeftSolid} alt='Seta para a direita' />
          <BackButtonLabel>Voltar</BackButtonLabel>
        </BackButton>

        <PhotoImage src={regularUrl} alt={description} />
      </PhotoFrame>

      <InfoPanel>
        {description && <PhotoDescription>{description}</PhotoDescription>}
        <PhotoCreationDate dateTime={creationDate.toISOString()}>
          Criada em {creationDate.toLocaleDateString()}, às {creationDate.toLocaleTimeString()}
        </PhotoCreationDate>
      </InfoPanel>
    </PhotoDetails>
  )
}

export default PhotoView
