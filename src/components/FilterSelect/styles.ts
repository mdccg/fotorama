import styled from 'styled-components'

export const Select = styled.select`
  height: 30px;
  border: 2px solid #c5eff7;
  border-radius: 10px;
  padding: 0 10px;
  margin-right: 20px;
  background-color: transparent;
  font-family: 'bold';
  box-sizing: border-box;
  max-width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    height: 40px;
    width: 100%;
  }
`

export const Option = styled.option`
  font-family: 'regular';
`