
import './App.css'
import Login from './compoenets/Login'
import Profile from './compoenets/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1>Context API</h1> 
      <Login /> 
      <Profile />   
    </UserContextProvider>
  )
}

export default App
