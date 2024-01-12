// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ImageDisplay = ({ filename }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/images/${filename}`, {
//           responseType: 'arraybuffer',
//         });

//         const blob = new Blob([response.data], { type: response.headers['content-type'] });
//         const url = URL.createObjectURL(blob);
//         setImageUrl(url);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();
//   }, [filename]);

//   return (
//     <div>
//       <h2>Image Display</h2>
//       {imageUrl ? <img src={imageUrl} alt="Uploaded" /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default ImageDisplay;

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div style={main}>
    
            <h1 style={h11}>Order Values</h1>
      <table style={tableStyle}>    
        <thead>
          <tr>
            <th style={thStyle}>Project Name</th>
            <th style={thStyle}>Client Name</th>
            <th style={thStyle}>Values</th>
            <th style={thStyle}>Commission</th>
            <th style={thStyle}>Project Name</th>
            <th style={thStyle}>Client Name</th>
            <th style={thStyle}>Values</th>
            <th style={thStyle}>Commission</th>
            <th style={thStyle}>Project Name</th>
            <th style={thStyle}>Client Name</th>
            <th style={thStyle}>Values</th>
         
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.ecode} style={index % 1 === 0 ? evenRowStyle : {}}>
              <td style={tdStyle}>{user.intent}</td>
              <td style={tdStyle}>{user.property_type}</td>
              <td style={tdStyle}>{user.price}</td>
              <td style={tdStyle}>{user.is_negotiable}</td>
              <td style={tdStyle}>{user.include_registration}</td>
              <td style={tdStyle}>{user.description}</td>
              <td style={tdStyle}>{user.parking}</td>
              <td style={tdStyle}>{user.user_type}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
//   backgroundColor: '#B0C4DE',
};
const h11={
  marginTop:'10px'
}
const marque={
  fontSize:'40px',
  color:'white',

}
const thStyle = {
  backgroundColor: '#4682B4',

  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'center',
  border: '1px solid #ccc',
  color: 'white',
};

const tdStyle = {
  padding: '10px',
  textAlign: 'center',
  border: '1px solid #ccc',
  
};

const evenRowStyle = {
  backgroundColor: 'dark'
};
const main = {
//   backgroundImage: 'url("https://images7.alphacoders.com/386/thumb-1920-386899.jpg")',
// backgroundColor:'transprent',
  backgroundSize: 'cover',
  backgroundImageRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    
    alignItems: 'center',
  
  };

 export default Home;