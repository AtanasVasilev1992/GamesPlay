import { Route, Routes} from 'react-router-dom'

import Header from "./componnets/header/Header"
import Home from "./componnets/home/Home"
import Login from './componnets/login/Login'
import Register from './componnets/register/Register'
import GameList from './componnets/game-list/GameList'
import GameCreate from './componnets/game-create/GameCreate'
import GameDetails from './componnets/game-details/GameDetails'

function App() {
  
  return (
    <div id="box">
         <Header />

         <main id="main-content">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/games' element={<GameList />} />
                <Route path='/games/:gameId/details' element={<GameDetails />} />
                <Route path='/games/create' element={<GameCreate />} />
            </Routes>
         </main>
    </div>
  )
}

export default App
