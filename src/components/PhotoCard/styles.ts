import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PhotoLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: 22%;

  @media (max-width: 1280px) {
    width: 30%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

export const PhotoImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d55ff;
  width: 100%;
  text-align: center;
  height: 100px;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
