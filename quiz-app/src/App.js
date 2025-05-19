
import React from 'react'
import { QuizProvider } from './QuizContext'
import QuizApp from './QuizApp'

function App() {
  return (
    <QuizProvider>
      <QuizApp/>
    </QuizProvider>
  )
}

export default App
