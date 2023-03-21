import React, { useEffect, useState } from 'react';
import '../style/eventsSty.css';

export default function Events() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setUser(data.events));
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <>
      {user &&
        user.length > 0 &&

        user.map((value, index) => (
          <>  
      <div className='eveDiv1'>
        <div className='eveDiv2' style={{ backgroundColor: value.bgColor}}>
          <div className='eveDiv3'>
            <p className='headFont'>{value.textEve}</p>
            <p className='descFont'>{value.eveNo}</p>
          </div>
        </div>
      </div>
      </>
  ))}
    </>
  )
}
