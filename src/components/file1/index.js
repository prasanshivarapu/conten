import React, { useState, useEffect } from 'react';
import Products from '../file2';
import './index.css';

function Home() {
  const [daTa, setDaTa] = useState('');

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch('https://www.reddit.com/r/reactjs.json');
        const data = await response.json();
        setDaTa(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getDetails();
  }, []);

  

  return (
    <div className='container'>
      <div className='row'>
         <div className= "pe">
      <div className="pe2">
        
            {daTa &&
              daTa.data.children.map(child => (
                <Products happy={child} key={child.id} />
              ))}
          
      </div>
    </div>
      </div>
    </div>
   
  );
}

export default Home;
