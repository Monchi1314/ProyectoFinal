import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListChat from "./pages/ListChat"
import Login from "./pages/Login"
import Reg from "./pages/Reg"
import RegChat from "./pages/RegChat"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar'
import { useState } from 'react'
import Logout from './pages/Logout'
import NoAccess from './pages/NoAccess'


const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = (() => {
    setLogin(true)
  })

  const handleLogout = (() => {
    setLogin(false)
  })

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/regchat" element={<RegChat />} />
        <Route path="/listchat" element={<ListChat />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route path="/noaccess" element={<NoAccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
