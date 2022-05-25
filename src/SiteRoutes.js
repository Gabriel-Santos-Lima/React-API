import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CorPrima from './pages/corPrima'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import Maior from './pages/maior'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/corPrima' element={<CorPrima />} />
                <Route path='/frequencia' element={<Frequencia />} />
                <Route path='/ingresso' element={<Ingresso />} />
                <Route path='/maior' element={<Maior />} />

            </Routes>
        </BrowserRouter>
    )
}