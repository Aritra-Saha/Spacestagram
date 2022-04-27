import './App.css';
import Timeline from './components/Timeline/Timeline';
import Header from './components/Header/Header';

function App() {

  // const [data, setData] = useState([]);

  // const apiKey = "https://api.nasa.gov/planetary/apod?api_key=d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=15&thumbs=TRUE";
  
  // // api key: d4catWkayonYRsvEhfcV7ipRbA6vTJ3aK7bW4ozz&count=30&thumbs=TRUE

  // useEffect(() => {
  //     fetch(apiKey)
  //         .then(res => res.json())
  //         .then(
  //             (result) => {
  //                 setData(result);
  //             }
  //         )
  // }, [])
  
  return (
    <div className='App'>
      <Header/>
      <Timeline/>
    </div>
  );
}

export default App;
