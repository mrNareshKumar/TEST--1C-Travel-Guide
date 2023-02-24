import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideItem from '../TravelGuideItem'
import FailureView from '../FailureView'
import {
  AppContainer,
  AppHeading,
  HorizontalLine,
  LoaderContainer,
  TravelGuideList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TravelGuide extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    travelGuide: [],
  }

  componentDidMount() {
    this.getTravelGuideDetails()
  }

  getTravelGuideDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        description: eachPackage.description,
        imageUrl: eachPackage.image_url,
      }))
      this.setState({
        travelGuide: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getTravelGuideDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  renderGuideView = () => {
    const {travelGuide} = this.state
    return (
      <TravelGuideList>
        {travelGuide.map(eachGuide => (
          <TravelGuideItem key={eachGuide.id} guideDetails={eachGuide} />
        ))}
      </TravelGuideList>
    )
  }

  renderTravelGuide = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGuideView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <AppHeading>Travel Guide</AppHeading>
        <HorizontalLine />
        {this.renderTravelGuide()}
      </AppContainer>
    )
  }
}

export default TravelGuide
