import {
  QueryClient,
  QueryClientProvider,
  } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import { useState, useEffect } from 'react'
import './App.css'
import Login from './Login/Login'
import Header from './Header'
import Destinations from './destinations'
import Resort from './Resort/Resort';
import Park from './Park/Park'
import Home from './Home'

const queryClient = new QueryClient()

function App() {
  let [showLogin, setShowLogin] = useState({show:false, page:'login'})
  let [user, setUser] = useState(false)
  let [resort, setResort] = useState(null)
  let [park, setPark] = useState(null)
  let [type, setType] = useState("ATTRACTION")
  let [title, setTitle] = useState("All Resorts")
  let [level, setLevel] = useState(null)

  useEffect(()=>{
    setTitle(park ? park.name : resort ? resort.name : "All Resorts")
    setLevel(park ? "park" : resort ? "resort" : null)
  },[resort, park])

  const goBack = () => {
    let newLevel = null
    if(level === "park"){
      setPark(null)
      newLevel = "resort"
    } else if(level === 'resort'){
      setResort(null)
    }
    setLevel(newLevel)
  }
  console.log(user)
  if(!user){
    return (
      <>
      <Header setShowLogin={setShowLogin} user={user} setUser={setUser} />
      {showLogin.show
        ? <Login page={showLogin.page} setShowLogin={setShowLogin} />
        : <Home setShowLogin={setShowLogin} />
      }
      </>
    )
  }


 

  return (
  <QueryClientProvider client={queryClient}>
       <Header setShowLogin={setShowLogin} setUser={setUser} />
   
    <Destinations setResort={setResort} />
    {resort ? <Resort resort={resort} setPark={setPark} /> : null} 
    {resort && park ? <Park resort={resort} park={park} type={type} setPark={setPark} /> : null }
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App
