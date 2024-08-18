import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prime from './components/Prime/Prime';
import Authorization from './components/Authorization/Authorization';
import Initial from './components/Authorization/Main/pages/Initial/Initial';
import Login from './components/Authorization/Main/pages/Login/Login';
import Register from './components/Authorization/Main/pages/Register/Register';
import Home from './components/Prime/Main/Pages/Home/Home';
import Novidades from './components/Prime/Main/Pages/Novidades/Novidades';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Authorization />} >
                    <Route path='/' element={<Initial />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route path='/prime' element={<Prime />} >
                    <Route path='/prime' element={<Home />} />
                    <Route path='/prime/novidades' element={<Novidades />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}
export default App;

