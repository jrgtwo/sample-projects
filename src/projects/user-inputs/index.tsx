import { TextInputs } from './sections/textInputs'
import { FormSubmission } from './sections/formSubmission'
import { TextArea } from './sections/textArea'
import { Tabs } from '../tabs/index'
import './user-inputs.css'

function UserInputs() {

  return (
    <section>
      <Tabs
        className='user-input-tabs'
        tabCardList={{
          heading: 'Input Playground',
          tabData: [
            {
              menuName: 'Text inputs',
              component: <TextInputs count={3} />
            },
            {
              menuName: 'Form Submissions',
              component: <FormSubmission />
            },
            {
              menuName: 'Text Areas',
              component: <TextArea />
            }
          ]
        }} />


    </section>
  )
}

export { UserInputs }