import { ChangeEvent, ReactElement, useState } from 'react'
interface TEXT_DATA_INTERFACE {
  text: ReactElement[],
  someOtherUsefulAndInterestingDataSet: []
}
const DEFAULT_TEXT_DATA: TEXT_DATA_INTERFACE = {
  text: [],
  someOtherUsefulAndInterestingDataSet: []
}
function TextArea() {
  const [textData, setTextData] = useState(DEFAULT_TEXT_DATA)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { target } = event
    const newTextData = { ...textData }

    console.log(JSON.stringify(target.value))
    newTextData.text = target.value.split('\n').map((item) => {

      return (<p>{item}</p>)
    })
    setTextData(newTextData)
  }
  return (
    <>
      <h2>Text Areas!</h2>
      <p>You've Typed:</p>
      <div className="text-area-output">{textData.text}</div>
      <textarea
        className="text-area"
        onChange={handleChange}
        rows={10}
        cols={80}
        placeholder="Type here please!..." />
    </>
  )
}

export { TextArea }