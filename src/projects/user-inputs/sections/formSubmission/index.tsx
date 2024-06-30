
import { useState } from 'react'

import { SubmissionState } from '../../constants'
import { UserDataForm } from './components/Form'
import { handleSubmit } from './handlers/handleSubmit'
import { useSubmitUserData } from './hooks/useSubmitUserData'

function FormSubmission() {
  const [submissionState, setSubmissionState] = useState(SubmissionState.IDLE)
  const [formData, setFormData] = useState({ name: '', email: '' })

  useSubmitUserData({
    formData, setSubmissionState
  })

  return (
    <UserDataForm
      formData={formData}
      handleSubmit={(event) => handleSubmit(event, setFormData, submissionState)}
      submissionState={submissionState}
    />
  )
}

export { FormSubmission }
