import type { UserFormData } from "../types"
import { SubmissionState } from "../constants"

function timeit(formData: UserFormData) {
  return new Promise((res) => {
    setTimeout(() => res(formData), 5000)
  })
}

async function saveUserData(formData: UserFormData, setSubmissionState: (arg0: SubmissionState) => void) {

  const response = await timeit(formData)

  console.log(response)
  setSubmissionState(SubmissionState.COMPLETE)
}

export { saveUserData }