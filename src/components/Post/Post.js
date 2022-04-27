import { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs'; 
import Heart from 'react-animated-heart';
import './Post.css';

function getDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    let month = dateArray[1];
    const day = dateArray[2];
    if (month === "01") {
        month = "January";
    }
    else if (month === "02") {
        month = "February";
    }
    else if (month === "03") {
        month = "March";
    }
    else if (month === "04") {
        month = "April";
    }
    else if (month === "05") {
        month = "May";
    }
    else if (month === "06") {
        month = "June";
    }
    else if (month === "07") {
        month = "July";
    }
    else if (month === "08") {
        month = "August";
    }
    else if (month === "09") {
        month = "September";
    }
    else if (month === "10") {
        month = "October";
    }
    else if (month === "11") {
        month = "November";
    }
    else if (month === "12") {
        month = "December";
    }
    return month + " " + day + ", " + year;
}

function Post({url, title, date, explanation}) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="post">
            <img src={url} className="picture" alt=""/>
            <div className="header">
                <button 
                    onClick={()=> setLiked((isLiked) => !isLiked)}
                    className="like-button"
                >
                    {liked && <BsHeartFill className='like'/>}
                    {!liked && <BsHeart/>}
                </button>
                {/* <Heart isClick={liked} onClick={() => setLiked(!liked)} className="like-button"/> */}
                <h4 className="title">{title}</h4>
                <h4 className="date">{getDate(date)}</h4>
            </div>
            <h4 className="explanation">{explanation}</h4>
        </div>
    );
}

export default Post;