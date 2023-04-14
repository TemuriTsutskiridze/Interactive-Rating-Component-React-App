import  React from "react";
import './choose.css';

interface IProps {
    handleRating: (button: number) => void,
    handleSubmit: () => void,
    rating: number
}

export default function Choose(props: IProps){
    return (
        <div className='Card'>
            <img className='star' src="/images/icon-star.svg" alt="star icon" />
            <h1 className='title'>How did we do?</h1>
            <p className='text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className='buttons'>
            { [1, 2, 3, 4, 5].map((button, index) => {
                const isActive = button === props.rating;

                return (
                <button 
                    className={`button ${ isActive ? "button_active" : null }`} 
                    key = { index } 
                    onClick= {() => props.handleRating(button)}
                >
                    { button }
                </button>
                )
            }) }
            </div>

            <button className='submit' onClick={ props.handleSubmit }>Submit</button>
        </div>
    )
}