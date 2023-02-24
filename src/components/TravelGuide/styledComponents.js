import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef4f7;
  min-height: 100vh;
`
export const AppHeading = styled.h1`
  font-family: 'Roboto',
  font-size: 24px;
  font-weight: bold;
  color: #334155;
  margin-bottom: 5px;
`
export const HorizontalLine = styled.hr`
  height: 3px;
  width: 200px;
  background-color: #52bbf0;
  border: none;
  margin: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TravelGuideList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
