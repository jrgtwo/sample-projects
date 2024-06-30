import type { FormEvent } from "react"
import { SubmissionState } from "./constants"

type DEFAULT_INPUT_TYPE = {
  tooShort: boolean,
  value: string
}

export type {
  DEFAULT_INPUT_TYPE
}

export type UserFormData = {
  name: string,
  email: string
}

export interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  email: HTMLInputElement
}
export interface UserFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export type UserDataFormProps = {
  formData: UserFormData,
  handleSubmit: (event: FormEvent<UserFormElement>) => void,
  submissionState: SubmissionState
}