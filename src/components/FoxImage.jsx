// import { useState, useEffect } from 'react';
// import foxLogo from '../assets/fox-logo.png'

// const API_URL = "https://randomfox.ca/floof/"

// function FoxImage() {
//   const [image, setImage] = useState(foxLogo)
//   const [loading, setLoading] = useState(false)


//   function fetchNewImage() {
//     setLoading(true)
//     fetch(API_URL)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Sorry an error occured:")
//         }
//         else {
//           return response.json()
//         }
//       })
//       .then(data => {
//         setImage(data.image)
//         setLoading(false)
//       })
//       .catch(error => {
//         console.error(error)
//         setLoading(false)
//       })
//   }

//   useEffect(() => {
//     fetchNewImage()

//   }, [])

//   return (
//     <div>
//       <p>Learn more about us!</p>
//       {loading ? <p>Loading please wait...</p> : null}
//       <img src={image} alt="random fox" />
//       <br></br>
//       <button onClick={fetchNewImage} >Get new fox image</button>
//     </div>
//   );
// }

// export default FoxImage


import { useState, useEffect } from 'react';
import foxLogo from '../assets/fox-logo.png';

const API_URL = "https://randomfox.ca/floof/";

function FoxImage() {
  const [image, setImage] = useState(foxLogo);
  const [loading, setLoading] = useState(false);

  function fetchNewImage() {
    setLoading(true);
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Sorry an error occured:");
        }
        return response.json();
      })
      .then(data => {
        setImage(data.image);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchNewImage();
  }, []);

  // --- STYLES OBJECTS ---
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    },
    title: {
      color: '#d35400',
      fontSize: '22px',
      marginBottom: '15px'
    },
    loadingText: {
      color: '#e67e22',
      fontStyle: 'italic',
      height: '20px'
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '8px',
      margin: '15px 0'
    },
    button: {
      backgroundColor: '#e67e22',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Learn more about us!</p>
      
      {/* Loading message wrapped in a fixed space so content doesn't jump */}
      <div style={styles.loadingText}>
        {loading ? <p>Loading please wait...</p> : null}
      </div>

      <img src={image} alt="random fox" style={styles.image} />
      
      <button 
        style={styles.button} 
        onClick={fetchNewImage}
      >
        Get new fox image
      </button>
    </div>
  );
}

export default FoxImage;