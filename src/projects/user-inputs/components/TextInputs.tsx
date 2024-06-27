import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { UseDupe } from '../hooks/useDupe'
import { DEFAULT_INPUT_TYPE } from '../types'

const DEFAULT_INPUT_STATE: DEFAULT_INPUT_TYPE = {
  tooShort: false,
  value: ''
}

const initial_state = (count: number) =>
  [...new Array(count)].map(() => ({ ...DEFAULT_INPUT_STATE }))

function TextInputs({ count }: { count: number }) {
  const [inputs, setInputs] = useState(initial_state(count))

  const onChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    const newInputs = [...inputs]

    newInputs[index].value = value
    newInputs[index].tooShort = value.length <= count
    setInputs(newInputs)
  }

  const dupes = UseDupe(count, inputs)

  return (
    <>
      <h2>Text Inputs</h2>
      {
        inputs.map(({ tooShort }, idx) => (
          <div className="input-wrapper" key={idx}>
            <input
              type='text'
              onChange={(event) => onChange(event, idx)} />
            {tooShort && <p>Too Short</p>}
            {dupes[idx] === true && <p>isDupe</p>}
          </div>
        ))
      }
    </>
  )
}

export { TextInputs }