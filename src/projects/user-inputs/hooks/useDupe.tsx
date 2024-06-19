import { useEffect, useState } from 'react'
import { DEFAULT_INPUT_TYPE } from '../types'

function UseDupe(count: number, inputs: DEFAULT_INPUT_TYPE[]) {

  const [dupes, setDupes] = useState([...Array(count)].map(() => false))

  useEffect(() => {
    const newInputs = [...inputs]
    const uniqueValueMap = new Set()

    const newDupes = newInputs.map((item, index) => {
      if (uniqueValueMap.has(item.value)) {
        return true
      }

      uniqueValueMap.add(item.value)

      for (let i = index + 1; i < inputs.length; i++) {
        const newVal = inputs[i].value
        if (newVal === item.value) {
          uniqueValueMap.add(item.value)
          return true
        }
      }

      return false
    })

    setDupes(newDupes)
  }, [inputs, setDupes])

  return dupes
}

export { UseDupe }
