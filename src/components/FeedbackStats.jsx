import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  
    const average = feedback.reduce((sum, item) =>{
        return sum + item.rating
    }, 0) / feedback.length

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? "0" : average.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  )
}

export default FeedbackStats
