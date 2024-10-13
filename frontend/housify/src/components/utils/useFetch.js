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
      'X-RapidAPI-Key': 'eab61dbed6mshed76e361f8186e5p12a90bjsn81898a63f214',
      'X-RapidAPI-Host': 'bayut-com1.p.rapidapi.com'
    }
  };
  
  fetch('https://bayut-com1.p.rapidapi.com/properties/list?name=Abu%20Dhabi&purpose=for-rent&hitsPerPage=30&page=0&sort=city-level-score', options)
    
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

      })
         
    .catch(err => console.error(err));
}
  
  return {items};
  }
  
  
  export default useFetch;
  
