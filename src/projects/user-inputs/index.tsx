import { TextInputs } from './components/TextInputs'
import { FormSubmission } from './components/FormSubmission'
import { Tabs } from '../tabs/index'

function UserInputs() {

  return (
    <section>
      <Tabs
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
            }
          ]
        }} />


    </section>
  )
}

export { UserInputs }