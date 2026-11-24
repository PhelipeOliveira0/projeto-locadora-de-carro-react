import { Outlet } from 'react-router-dom';
import './App.css';

import Footer from './componnents/Footer';
import Header from './componnents/Header';

function App() {
    return (
        <>
            <Header className="header" />

            <main className="site">
                <Outlet/>
            </main>

            <Footer className="footerDt" />
        </>
    );
}

export default App;