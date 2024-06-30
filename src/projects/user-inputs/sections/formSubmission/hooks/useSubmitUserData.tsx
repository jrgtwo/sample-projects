import { useEffect } from "react"
import { saveUserData } from "../../../request/saveUserData"
import { SubmissionState } from "../../../constants"
import { UserFormData } from "../../../types"

type UseSubmitUserDataArgs = {
  formData: UserFormData,
  setSubmissionState: (arg0: SubmissionState) => void
}

function useSubmitUserData({
  formData, setSubmissionState
}: UseSubmitUserDataArgs) {

  useEffect(() => {
    if (formData.name !== '' && formData.email !== '') {
      setSubmissionState(SubmissionState.TRANSMITTING)
      saveUserData(formData, setSubmissionState)
    }
  }, [formData, setSubmissionState])

}

export { useSubmitUserData }