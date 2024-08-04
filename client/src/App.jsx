import { Route, Routes } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'

import Header from "./componnets/header/Header"
import Home from "./componnets/home/Home"
import Login from './componnets/login/Login'
import Register from './componnets/register/Register'
import GameList from './componnets/game-list/GameList'
import GameCreate from './componnets/game-create/GameCreate'
import GameDetails from './componnets/game-details/GameDetails'
import Logout from './componnets/logout/Logout'
import GameEdit from './componnets/game-edit/GameEdit'
import RouteGuard from './componnets/common/RouteGuard'
import PrivateGuard from './componnets/common/PrivateGuard'

function App() {

    return (
        <AuthContextProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/games' element={<GameList />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        {/* <Route path='/games/create' element={<RouteGuard><GameCreate /></RouteGuard> } /> */}
                        <Route element={<PrivateGuard />}>
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/games/:gameId/edit' element={<GameEdit />} />
                            <Route path='/games/create' element={<GameCreate />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    )
}

export default App
