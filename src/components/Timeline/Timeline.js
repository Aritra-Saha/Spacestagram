import {useEffect, useState} from 'react';
import Post from '../Post/Post';
import './Timeline.css';

function Timeline() {

    const [data, setData] = useState([]);

    const apiKey = "https://api.nasa.gov/planetary/apod?api_key=d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=15&thumbs=TRUE";
    
    // api key: d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=30&thumbs=TRUE

    useEffect(() => {
        if (sessionStorage.getItem("data")) {
            setData(JSON.parse(sessionStorage.getItem("data")));
        }
        else {
            fetch(apiKey)
                .then(res => res.json())
                .then(
                    (result) => {
                        result.map((object) => {object["liked"] = false});
                        setData(result);
                        sessionStorage.setItem("data", JSON.stringify(result));
                    }
                )
        }
    }, [])

    return (
        <div>
        {data.map((post, index) => (
            <Post
                index={index}
                initialLiked={post.liked ? post.liked : false}
                url={post.hdurl}
                title={post.title}
                date={post.date}
                explanation={post.explanation}
            />
        ))}
      </div>
    );
}

export default Timeline;