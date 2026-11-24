import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import SobreNos from './componnents/SobreNos';
import Contatos from './componnents/Contatos';
import Home from './componnents/Home';
import Car from './componnents/Car';
import Categoria from './componnents/Categoria';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="aboutUs" element={<SobreNos />}/>
                    <Route path="talkToUs" element={<Contatos />}/>
                    <Route path="categoria/:categoria" element={<Categoria/>} />
                    <Route path="categoria/:categoria/:carro" element={<Car/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);