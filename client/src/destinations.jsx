import API from './api'
import { useQuery } from 'react-query'
import { Select } from '@chakra-ui/react'
import { useState } from 'react'

export default function Destinations({setResort}){
    const [selectedResort, setSelectedResort] = useState(null)
    const destinations = useQuery("destinations", () => 
    API.get("/destinations")
  .then(res => res.data.destinations), {staleTime: Infinity})


  if(destinations.isError){
      console.log(destinations.error)
      return null
  }

  const changeHandler = (value) => {
    setSelectedResort(value)
    setResort(value)
  }

  return destinations.isLoading
  ?(
      <h3>Loading...</h3>
  )
  : (
    <Select placeholder='Select Resort' onChange={(e)=>changeHandler(e.target.value)} value={selectedResort}>
          {destinations?.data.map(resort => (
            <option value={resort.id}>{resort.name}</option>
          ))}
    </Select>
  )

}