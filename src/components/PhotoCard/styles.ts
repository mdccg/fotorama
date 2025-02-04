import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PhotoImage = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #284387;
  width: 100%;
  text-align: center;
`

export const PhotoDescription = styled.span`
  font-family: 'bold';
  margin: 10px;
  color: white;
`

export const PhotoCreationDate = styled.span`
  font-family: 'regular';
  color: white;
  margin: 10px;
`
