    import { useContext, useState, useEffect } from "react"
    import Card from "./Shared/Card"
    import Button from "../components/Button"
    import RatingSelect from "./RatingSelect";
    import FeedbackContext from "../Context/FeedbackContext";

    function FeedbackForm() {
        const [text, setText] = useState("");
        const [rating, setRating] = useState(10);
        const [disable, setDisable] = useState(true);
        const [message, setMessage] = useState(null);
        const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

        useEffect(()=>{
            if(feedbackEdit.edit){
                setDisable(false)
                setText(feedbackEdit.feedback.text)
            }
        }, [feedbackEdit])

        const isGreatherThanNine = text.trim().length < 9

        const handleTextChange = (e) => {
            if(isGreatherThanNine){
                setDisable(true)
                setMessage("It must have at least 10 characters")
            } else {
                setMessage(null)
                setDisable(false);
            }
                setText(e.target.value);
        }

        const handleSubmit = (e) =>{
            e.preventDefault()
            if(!isGreatherThanNine){
                const newFeedback = {
                    text,
                    rating, 
                }
                
                if(feedbackEdit.edit){
                    updateFeedback(feedbackEdit.feedback.id, newFeedback)
                } else {
                    addFeedback(newFeedback)
                }
                
                setText("")
            }   
        }
    return (
        <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us?</h2>
                    <RatingSelect select={(rating) => setRating(rating)}/>
                    <div className="input-group">
                        <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"/>
                        <Button type="submit" isDisable={disable}>Send</Button>
                    </div>
                </form>
                {message && <div className="message">{message}</div>}
        </Card>
    )
    }

    export default FeedbackForm
