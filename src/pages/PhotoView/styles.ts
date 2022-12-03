import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackButton = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 16px;
`

export const BackButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`

export const BackButtonLabel = styled.span`
  font-family: 'bold';
  font-size: 125%;
`

export const PhotoDetails = styled.main`
  flex-direction: row;
  min-height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const PhotoFrame = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    flex: 0;
  }
`

export const PhotoImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const InfoPanel = styled.div`
  background-color: #284387;
  color: #fff;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

export const PhotoDescription = styled.h1`
  font-family: 'bold';
  font-size: 150%;
`

export const PhotoCreationDate = styled.time`
  font-family: 'regular';
`