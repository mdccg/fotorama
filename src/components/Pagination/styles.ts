import styled from 'styled-components'

export const NavigationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const NavigationButton = styled.button`
  width: 200px;
  background-color: #2d55ff;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
  margin: 10px;
`

export const CurrentPage = styled.span`
  font-family: 'regular';
  margin: 0 5px;
  text-align: center;
`