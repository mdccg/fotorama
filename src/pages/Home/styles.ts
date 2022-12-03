import styled, { css } from 'styled-components'

const responsive = () => css`
  max-width: 100%;
`

export const Container = styled.div`
  padding: 50px 20px;
`

export const SearchArea = styled.div`
  width: 700px;
  margin: 0 auto 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${responsive};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FilterInput = styled.input.attrs({ type: 'text' })`
  width: 400px;
  height: 30px;
  border: 2px solid #c5eff7;
  border-radius: 10px;
  font-family: 'regular';
  font-size: 15px;
  text-align: center;
  padding: 0 10px;
  margin-right: 20px;
  box-sizing: border-box;
  ${responsive};
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    height: 40px;
  }
`

export const SearchButton = styled.button`
  width: 100px;
  background-color: #2d55ff;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
  font-size: 100%;
  ${responsive};

  @media (max-width: 768px) {
    align-self: center;
  }
`

export const Loading = styled.img`
  display: block;
  width: 48px;
  margin: auto;
`

export const ResultsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
`