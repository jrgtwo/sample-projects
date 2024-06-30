import { InputType } from "../../../constants"

export type FormInputProps = {
  className?: string,
  label: string,
  name: string,
  type: InputType
}
function FormInput({ name, label, type }: FormInputProps) {
  return (
    <div className="form-input input-wrapper">
      <label htmlFor={name}>{label}: </label>
      <input type={type} name={name} />
    </div>
  )
}

export { FormInput }