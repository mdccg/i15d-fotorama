import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 100px;

  @media (max-width: 600px) {
    padding: 50px 20px;
  }
`

export const PhotoPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d55ff;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  padding: 20px;
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

export const BackLinkPanel = styled.div`
  margin: 30px auto;
  width: 100px;
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const BackButton = styled.button`
  width: 100%;
  background-color: #2d55ff;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
`
