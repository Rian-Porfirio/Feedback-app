import Card from "./Shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"
import { FaE } from "react-icons/fa6"

function FeedbackItem({feedbackData}) {
const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{feedbackData.rating}</div>
      <button onClick={() => deleteFeedback(feedbackData.id)} className="close"><FaTimes/></button>
      <button onClick={() => editFeedback(feedbackData)} className="edit"><FaEdit color="purple"/></button>
      <div className="text-display">{feedbackData.text}</div>
    </Card>
  )
}

export default FeedbackItem
