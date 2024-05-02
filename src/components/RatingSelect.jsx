import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function RatingSelect({select}) {
  
  const {feedbackEdit} = useContext(FeedbackContext)

        useEffect(()=>{
            if(feedbackEdit.edit){
                setSelected(feedbackEdit.feedback.rating)
            }
        }, [feedbackEdit])

    const [selected, setSelected] = useState(10);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    
  return (
    <ul className="rating">
      {Array.from({length: 10}, (_,i) => (
        <li key={`rating-${i + 1}`}>
            <input
            id={`rating-${i + 1}`}
            type="radio"
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
            />
            <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
