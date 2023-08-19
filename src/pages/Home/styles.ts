import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 20px;
`

export const SearchArea = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FilterInput = styled.input.attrs({ type: 'text' })`
  width: 400px;
  height: 30px;
  border: 3px solid #c5eff7;
  border-radius: 10px;
  font-family: 'regular';
  font-size: 15px;
  text-align: center;
  padding: 0 10px;

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const CriteriaPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`

export const CriteriaOptionButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  background-color: white;
  margin: 0 5px;
  font: inherit;
  color: white;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid white;
  border-radius: 50%;
  display: grid;
  place-content: center;

  ::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #2d55ff;
  }

  :checked::before {
    transform: scale(1);
  }
`

export const CriteriaOptionLabel = styled.span`
  font-family: 'regular';
  margin-right: 10px;
  color: white;

  :last-of-type {
    margin-right: 0;
  }
`

export const SearchButton = styled.button`
  min-width: 100px;
  background-color: #2d55ff;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
  font-size: 100%;
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

export const NavigationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const NavigationButton = styled.button`
  width: 50px;
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
  color: white;
`
