import { useState, useEffect } from "react";

const useFetch = ()=>{

  
  const [items, setItems]= useState([]);

useEffect(()=>{ 
  fetchData()
}, []);

const fetchData = () =>{
  const options = {
    method: 'GET',
    headers: {
<<<<<<< HEAD
      'X-RapidAPI-Key': 'eab61dbed6mshed76e361f8186e5p12a90bjsn81898a63f214',
      'X-RapidAPI-Host': 'bayut-com1.p.rapidapi.com'
    }
  };
  
  fetch('https://bayut-com1.p.rapidapi.com/properties/list?name=Abu%20Dhabi&purpose=for-rent&hitsPerPage=30&page=0&sort=city-level-score', options)
=======
      'X-RapidAPI-Key': 'YOUR RAPIDAPI-KEY',
      'X-RapidAPI-Host': 'YOUR RAPIDAPI-HOST NAME'
    }
  };
  
  fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
>>>>>>> 88ccfd9... Update dependencies and improve configuration
    
    .then(response => response.json())
    .then(response => {
      const data =[]
          response.hits.map(({id, title, coverPhoto, purpose, price, location}) =>{
            data.push({
              id,
              title,
              purpose,
              price,
              url : coverPhoto.url,
              state: location[0].name})
              return (data);
          })
          
          setItems(data); 
<<<<<<< HEAD
=======
          console.log(data)

>>>>>>> 88ccfd9... Update dependencies and improve configuration

      })
         
    .catch(err => console.error(err));
}
  
  return {items};
  }
  
  
  export default useFetch;
  
