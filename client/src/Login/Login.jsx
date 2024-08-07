// import './login.css'
import { useState } from 'react'
import { 
    Input, 
    InputGroup, 
    InputRightElement, 
    Button, 
    Text, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter 
} from '@chakra-ui/react'

const Login = () => {
    const [showRegister, setShowRegister] = useState(false)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    if(showRegister){
        return (
        <Card align="center">
            <CardHeader>
                <Text fontSize='3xl'>Welcome!</Text>
            </CardHeader>
            <CardBody>
                Please enter the following to register:
            
            <form>
                <Input placeholder='Email' />
                <Input placeholder='Repeat Email' />
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
                <Input placeholder='Repeat Password' />
            </form>
            <Button>Register</Button>
            <br/>
            <Button onClick={()=>setShowRegister(false)}>Already Registered?</Button>
            </CardBody>
        </Card>
        )
    }

    return (
        <div className="loginContainer">
        <div className="loginForm">
            <h1>Welcome!</h1>
            <form>
                <input type="text" placeholder="User Name" />
                <br/>
                <input type="password" placeholder="Password" />
            </form>
            <button>Login</button>
            <br/>
            <button onClick={()=>setShowRegister(true)}>Need to register?</button>
        </div>
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