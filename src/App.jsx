import Quiz from "./components/Quiz"
import {jsQuizz} from "./utils/constants"

function App() {
 

  return (
    <>
      <Quiz questions={jsQuizz.questions} />
    </>
  )
}

export default App
