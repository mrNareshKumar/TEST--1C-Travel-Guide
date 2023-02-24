import {
  GuideListItem,
  GuideImage,
  GuideContentSection,
  GuideName,
  GuideDescription,
} from './styledComponents'

const TravelGuideItem = props => {
  const {guideDetails} = props
  const {id, name, description, imageUrl} = guideDetails

  return (
    <GuideListItem key={id}>
      <GuideImage src={imageUrl} alt={name} />
      <GuideContentSection>
        <GuideName>{name}</GuideName>
        <GuideDescription>{description}</GuideDescription>
      </GuideContentSection>
    </GuideListItem>
  )
}

export default TravelGuideItem
