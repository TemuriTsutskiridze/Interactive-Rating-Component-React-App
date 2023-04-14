import { isValidElement, useState } from 'react'
import './App.css'
import Choose from './components/choose_component/Choose'
import Answer from './components/answer_component/Answer';

type Page = "choose" | "answer";

function App() {
  
  const [page, setPage] = useState<Page>("choose");
  const [rating, setRating] = useState(0);

  function handleSubmit() {
      if (rating !== 0) {
          setPage("answer");
      }
  }

  function handleContinue() {
    setPage("choose");
    setRating(0);
  }

  function handleRating(rating: number) {
      setRating(rating);
  }

  return (
    <>
      {
        page === "choose" && (
          <Choose 
            rating = { rating } 
            handleRating = { handleRating } 
            handleSubmit = { handleSubmit } />
        )
      }

      { 
        page === "answer" && (
          <Answer 
            rating = { rating }
            handleContinue = { handleContinue }
          />
        ) 
      }
    </>
  )
}

export default App


