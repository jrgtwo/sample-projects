import { SubmissionState } from "../../constants";

function toSubmissionStateReadable(state: SubmissionState) {
  let output
  switch (state) {
    case SubmissionState.IDLE:
      output = 'Waiting for user to submit...'
      break;
    case SubmissionState.TRANSMITTING:
      output = 'Request in Progress...'
      break;
    case SubmissionState.COMPLETE:
      output = 'Request is Complete!'
      break;
    case SubmissionState.FAILED:
      output = 'Request Failed! :('
      break;
  }

  return output
}

export { toSubmissionStateReadable }