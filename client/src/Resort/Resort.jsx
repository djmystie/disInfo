import API from '../api'
import { useQuery } from 'react-query'
import { Select } from '@chakra-ui/react'
import { useState } from 'react'

export default function Resort({resort, setPark}){
    const [selectedPark, setSelectedPark] = useState(null)
    const resortData = useQuery(resort, () => 
    API.get(`entity/${resort}/children`)
  .then(res => res.data), {staleTime: 300000})


  const changeHandler= (value) => {
    setSelectedPark(value)
    setPark(value)
  }

  return resortData.isLoading
  ?(
      <h3>Loading...</h3>
  )
  : (
    <Select placeholder='Select Resort' onChange={(e)=>changeHandler(e.target.value)} value={selectedPark}>
          {resortData.data.children.filter(type => type.entityType === "PARK").map(entity => (
            <option key={entity.id} value={entity.id}>{entity.name}</option>
          ))}
    </Select>
     
  )

}