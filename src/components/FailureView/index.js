import {
  FailureViewContainer,
  FailureViewHeading,
  FailureViewNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }
  return (
    <FailureViewContainer>
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewNote>
        We are having some trouble to complete your request.
        <br /> Please try again later.
      </FailureViewNote>
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )
}

export default FailureView
