import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'


function App() {

const [nasaData, setNasaData] = useState(null);


useEffect(() => {
  axios.get('https://api.nasa.gov/#apod')
    .then(res => {
      return console.log(res.data)
    })
    .catch(err => {
      return console.log(Err)
    })

}, [nasaData])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
