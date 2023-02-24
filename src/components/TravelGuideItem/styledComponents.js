import styled from 'styled-components'

export const GuideListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 20px;
    margin-top: 20px;
  }
`
export const GuideImage = styled.img``
export const GuideContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const GuideName = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  padding: 0px;
`
export const GuideDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  padding: 0px;
  margin-top: 0px;
`
