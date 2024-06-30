import { InputType } from "../../../constants"
import { UserDataFormProps } from "../../../types"
import { toSubmissionStateReadable } from "../helpers"
import { FormInput } from "./FormInput"

function UserDataForm({
  formData, handleSubmit, submissionState
}:
  UserDataFormProps
) {
  return (
    <>
      <p>Form Submission State: {toSubmissionStateReadable(submissionState)}</p>
      <h2>Form Submission</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type={InputType.TEXT}
          label="Name" />
        <FormInput
          name="email"
          type={InputType.TEXT}
          label="Email" />
        <input type="submit" value="Submit!" />

      </form>
    </>
  )
}
export { UserDataForm }