import {useEffect, useState} from 'react';
import Post from '../Post/Post';
import './Timeline.css';

function Timeline() {

    const [data, setData] = useState([]);

    const apiKey = "https://api.nasa.gov/planetary/apod?api_key=d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=15&thumbs=TRUE";
    
    // api key: d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=30&thumbs=TRUE

    useEffect(() => {
        fetch(apiKey)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                }
            )
    }, [])

    return (
        <div>
        {data.map((post) => (
            <Post
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