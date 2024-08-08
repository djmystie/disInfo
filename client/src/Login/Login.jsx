import './login.css'
import { useState } from 'react'
import { 
    Input, 
    InputGroup, 
    InputRightElement, 
    InputLeftAddon,
    Button, 
    Text, 
    Center, 
    Stack 
} from '@chakra-ui/react'

const Login = ({page, setShowLogin}) => {
    if(page === "register"){
        return (
            <div className="register">
                <Text fontSize='3xl'>Welcome to the club!</Text>
                <Text mb={9} fontSize='1xl'>Please enter your info below to join.</Text>
                <Stack spacing={3} width={350}>
                    <Input size='lg' placeholder='Email Address' variant='filled' />
                    <Input size='lg' type="tel" placeholder='PhoneNumber' variant='filled' />
                    <Input size='lg' type='password' placeholder='Choose a password' variant='filled' />
                    <Input size='lg' type='rPassword' placeholder='Repeat your password' variant='filled' />   
                 
                </Stack>
                <Button mb={9} size='lg'>Register</Button>
                <br/>
                <Button size='sm'  onClick={()=>setShowLogin({show:true, page:'login'})}>Already Registered?</Button>
            </div>
        )
    }

    return (
        <div className="register">
        <Text fontSize='3xl'>Welcome to the club!</Text>
        <Text mb={9} fontSize='1xl'>Please sign in below.</Text>
        <Stack spacing={3} width={350}>
            <Input size='lg' placeholder='Email Address' variant='filled' />
            <Input size='lg' type='password' placeholder='Password' variant='filled' />
         
        </Stack>
        <Button mb={9} size='lg'>Sign In</Button>
        <br/>
        <Button size='sm'  onClick={()=>setShowLogin({show:true, page:'register'})}>Need to Register?</Button>
    </div>
    )
}

function PasswordInput() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

export default Login