import type { FormEvent } from 'react'

function FormSubmission() {

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(event)
  }
  return (
    <>
      <h2>Form Submission</h2>
      <form
        onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" />
        </div>

        <input type="submit" value="Submit!" />

      </form>
    </>
  )
}

export { FormSubmission }