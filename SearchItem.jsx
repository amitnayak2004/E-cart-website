import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Products from './Products';
const SearchItem = () => {
const {term} = useParams();
const [filterData, setfilterData] = useState([]);


useEffect(() => {
  const filteredData = () =>{
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.
      toLowerCase())); 
      setfilterData(data)
  }
  filteredData();
}, [term])



  return (
    <Products items={filterData}/>
  )
}

export default SearchItem