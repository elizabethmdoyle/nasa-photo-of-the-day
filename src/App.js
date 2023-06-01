import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photos from './components/Photos/Photos'

// const dummyData = {
//   copyright:"Juan Antonio Sendra",
//   date:"2020-09-21",
//   explanation: `Capturing this sunrise required both luck and timing.  First and foremost, precise timing was needed to capture a sailboat crossing right in front of a rising Sun.  Additionally, by a lucky coincidence, the background Sun itself appears unusual -- it looks like the Greek letter Omega (\u03a9). 
//    In reality, the Sun remained its circular self -- the Omega illusion was created by sunlight refracting through warm air just above the water.  Optically, the feet of the capital Omega are actually an inverted image of the Sun region just above it.  
//   Although somewhat rare, optical effects caused by the Earth's atmosphere can make distant objects near the horizon -- including the Sun and Moon -- look quite unusual.  This single exposure image was taken over the Mediterranean Sea just over two weeks ago near Valencia, Spain.`,
//   hdurl:"https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_8504.jpg",
//   media_type:"image",
//   service_version:"v1",
//   title:"Omega Sunrise",
//   url:"https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_960.jpg"}
  
// }

/* 
"copyright":"Juan Antonio Sendra",
"date":"2020-09-21",
"explanation":"Capturing this sunrise required both luck and timing.  First and foremost, precise timing was needed to capture a sailboat crossing right in front of a rising Sun.  Additionally, by a lucky coincidence, the background Sun itself appears unusual -- it looks like the Greek letter Omega (\u03a9).  In reality, the Sun remained its circular self -- the Omega illusion was created by sunlight refracting through warm air just above the water.  Optically, the feet of the capital Omega are actually an inverted image of the Sun region just above it.  
Although somewhat rare, optical effects caused by the Earth's atmosphere can make distant objects near the horizon -- including the Sun and Moon -- look quite unusual.  This single exposure image was taken over the Mediterranean Sea just over two weeks ago near Valencia, Spain.",
"hdurl":"https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_8504.jpg",
"media_type":"image",
"service_version":"v1",
"title":"Omega Sunrise",
"url":"https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_960.jpg"}
*/

function App(props) {

const [nasaData, setNasaData] = useState();
// const [photoDetails, setPhotoDetails] = useState(null)

// const DEMO_KEY = `p7xfijrpRlqHjnqeyqkSalmjpKedDmfqziFIiKxK`;

// const openDetails = id => {
//   photoDetails(id)

// }

// const closeDetails = () => {
//   setPhotoDetails(null)
// }

// // https://api.nasa.gov/planetary/apod?api_key=p7xfijrpRlqHjnqeyqkSalmjpKedDmfqziFIiKxK&date=2023-06-01

useEffect(() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
       console.log(res.data)
       setNasaData(res.data)
    })
    .catch(err => {
      return console.log(err)
    })

}, [])


  return (
    <div className="App" >
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
           {/* {
      nasaData.map(ph => {
        return <Photos info={ph} key={ph.id} openDetails={openDetails}/>
      })

      }
      {
        photoDetails && <Photos photoDetails={photoDetails} close={closeDetails} />
      } */}
        

    </div>
  );
}



export default App;
