import { useState, useEffect } from 'react';
import foxLogo from '../assets/fox-logo.png'

const API_URL = "https://randomfox.ca/floof/"

function FoxImage() {
  const [image, setImage] = useState(foxLogo)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch (API_URL)
    .then(response =>{
      if(!response.ok){
        throw new error("Sorry an error occured:" )
      }
      else{
        return response.json()
      }
    })
    .then(data => {
      setImage(data.image)
      setLoading(false)})
    .catch(error => {
      console.error (error)
      setLoading(false)})
  }, [])
  
  return (
    <div>
      <p>Learn more about us!</p>
      {loading ? "" : <p>Loading please wait...</p>}
      <img src={image} alt="random fox" />
    </div>
  );
}

export default FoxImage