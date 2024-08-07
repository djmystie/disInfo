import API from '../api'
import { useQuery } from 'react-query'
import { VStack, StackDivider, Box } from '@chakra-ui/react'

export default function Resort({resort, park, type, setPark}){
    const parkData = useQuery(park, () => 
    API.get(`entity/${park}/live`)
  .then(res => res.data), {staleTime: 300000})
console.log(parkData)
let sorted = []
if(parkData.isSuccess){
    sorted = parkData.data.liveData.sort((a, b) => (a?.queue?.STANDBY?.waitTime < b?.queue?.STANDBY?.waitTime) ? 1 : -1)
}

  if(parkData.isError) { return <p>{park}</p>}

  return parkData.isLoading
  ?(
      <h3>Loading...</h3>
  )
  : (
    <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        style={{marginTop: "10px"}}
    >
          {sorted.filter(a => a.entityType === type).map(entity => (
              type === "ATTRACTION"
              ? <Box key={entity.id} w='100%' style={{padding:"0 20px"}}>
                    <div className="attraction">
                      <div>{entity.name}<br/>{entity.status}</div>
                      <div className={`waitTime ${entity.status}`}>{entity?.queue?.STANDBY?.waitTime || "--"}</div>
                    </div>
                </Box>
              : type === "SHOW"
              ? <Box className={entity.status} key={entity.id}>{entity.name} - {entity?.queue?.STANDBY?.waitTime}</Box>
              : null
          ))}  
    </VStack>
  )

}