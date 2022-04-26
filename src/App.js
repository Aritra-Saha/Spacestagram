import {useState, useEffect} from 'react';
import './App.css';
import Post from './components/Post';

function App() {

  const [data, setData] = useState([]);

  const apiKey = "https://api.nasa.gov/planetary/apod?api_key=d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=30&thumbs=TRUE";
  
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
    <div className='App'>
      <div className='App-header'>
        <img src="ig.png" className='App-logo'/>
        <strong className='logo-title'>Spacestagram</strong>
      </div>
      <div>
        {data.map((post)=>(
          <Post
            url={post.hdurl}
            title={post.title}
            date={post.date}
            explanation={post.explanation}
          />
        ))}
        
      </div>
    </div>
    
  );
}

export default App;
