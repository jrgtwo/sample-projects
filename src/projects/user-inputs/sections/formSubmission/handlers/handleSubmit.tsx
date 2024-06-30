import { FormEvent } from "react"
import { UserFormData, UserFormElement } from "../../../types"
import { SubmissionState } from "../../../constants"

function handleSubmit(
  event: FormEvent<UserFormElement>,
  setFormData: (arg0: UserFormData) => void,
  submissionState: SubmissionState
) {
  event.preventDefault()

  if (![
    SubmissionState.IDLE,
    SubmissionState.COMPLETE
  ].includes(submissionState)) return

  const { elements: { name, email } } = event.currentTarget

  setFormData({ name: name.value, email: email.value })
}

export { handleSubmit }