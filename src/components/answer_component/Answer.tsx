import React from "react"
import './answer.css' 

interface IProps {
    rating: number
    handleContinue: () => void
}

export default function Answer(props: IProps) {
    return (
        <div className='answer'>
            <img 
                src="./images/illustration-thank-you.svg" 
                alt="thank you illustration" 
            />
            <div className='choice'>
                You selected { props.rating } out of 5
            </div>
            <h2 className='thankyou'>Thank You!</h2>
            <p className='thankyou_text'>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
            <button className="continue" onClick={ props.handleContinue }>Continue</button>
        </div>
    )
}