import { Text, Button, Heading } from '@chakra-ui/react'
const Home = ({setShowLogin}) => {
    return (
        <div className="mainContainer">
      <Heading as='h1' size='xl5' className="readex-pro-bold heading">
        WaitFinder
      </Heading>
      <div className='queueImage'/>
      <div className="innerContainer">
        <Text fontSize='2xl' color="#224f4f">Wait times, notifications & information for theme park fans around whe world.</Text>
        <Button size='lg' mt='4' onClick={()=>setShowLogin({show:true, page:'register'})}>Join Us</Button>
      </div>
    </div>
    )
}

export default Home