import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photos from './components/Photos/Photos'


function App(props) {

const [nasaData, setNasaData] = useState({});
const [photoDetails, setPhotoDetails] = useState(null)

const DEMO_KEY = `p7xfijrpRlqHjnqeyqkSalmjpKedDmfqziFIiKxK`;

const openDetails = id => {
  photoDetails(id)

}

const closeDetails = () => {
  setPhotoDetails(null)
}

// https://api.nasa.gov/planetary/apod?api_key=p7xfijrpRlqHjnqeyqkSalmjpKedDmfqziFIiKxK&date=2023-06-01

useEffect(() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&count=${5}`)
    .then(res => {
       console.log(res.data)
       setNasaData(res.data)
    })
    .catch(err => {
      return console.log(err)
    })

}, [DEMO_KEY])


  return (
    <div className="App" >
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div data={nasaData}>
           {
      nasaData.map(ph => {
        return <Photos info={ph} key={ph.id} openDetails={openDetails}/>
      })

      }
      {
        photoDetails && <Photos photoDetails={photoDetails} close={closeDetails} />
      }
        </div>

    </div>
  );
}



export default App;
