import { useState, useEffect } from 'react';
import foxLogo from '../assets/fox-logo.png'

const API_URL = "https://randomfox.ca/floof/"

function FoxImage() {
  const [image, setImage] = useState(foxLogo)

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
    .then(data => setImage(data.image))
    .catch(error => console.error (error))
  }, [])
  
  return (
    <div>
      <p>Learn more about us!</p>
      <img src={image} alt="fox logo" />
    </div>
  );
}

export default FoxImage