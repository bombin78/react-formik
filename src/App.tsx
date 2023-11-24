import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SimpleFormExample1 from './pages/SimpleFormExample1';
import SimpleFormExample2 from './pages/SimpleFormExample2';
import SimpleFormExample3 from './pages/SimpleFormExample3';
import SimpleFormExample4 from './pages/SimpleFormExample4';
import './App.css';
import About from './pages/About';

function App() {

    return (
        <BrowserRouter>
            <div className='app'>
                    <div className='navbar'>
                        <Link className="navbarLink" to="/">О проекте</Link>
                        <Link className="navbarLink" to="/example1">Пример 1</Link>
                        <Link className="navbarLink" to="/example2">Пример 2</Link>
                        <Link className="navbarLink" to="/example3">Пример 3</Link>
                        <Link className="navbarLink" to="/example4">Пример 4</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/example1" element={<SimpleFormExample1 />} />
                        <Route path="/example2" element={<SimpleFormExample2 />} />
                        <Route path="/example3" element={<SimpleFormExample3 />} />
                        <Route path="/example4" element={<SimpleFormExample4 />} />
                    </Routes>
            </div>
        </BrowserRouter>
        
    )
}

export default App
