import {motion, AnimatePresence} from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"


function FeedbackList( ) {
  const {feedback} = useContext(FeedbackContext)

  return (
    <div className="feedback-list">
        <AnimatePresence>
            <motion.div key={feedback.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
              {feedback.map((item) => (
              <FeedbackItem key={item.id} feedbackData={item}/>
              )) }
            </motion.div>
        </AnimatePresence>
     </div>
  )
}

export default FeedbackList
