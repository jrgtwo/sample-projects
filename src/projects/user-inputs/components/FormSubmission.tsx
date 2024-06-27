import type { FormEvent } from 'react'
import { useState } from 'react'

type FormSubmitType = FormEvent<{ elements: { name: HTMLFormElement, email: HTMLFormElement } }>
function FormSubmission() {

  const [formData, setFormData] = useState({ name: '', email: '' })

  function handleSubmit(event: FormSubmitType) {
    event.preventDefault()
    const { currentTarget: {
      elements: {
        name, email
      }
    } } = event
    console.log(name.value)
    setFormData({ name: name.value, email: email.value })
  }
  return (
    <>
      <h2>Form Submission</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <form
        onSubmit={handleSubmit}>
        <div className="form-input input-wrapper">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>

        <div className="form-input input-wrapper">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" />
        </div>

        <input type="submit" value="Submit!" />

      </form>
    </>
  )
}

export { FormSubmission }