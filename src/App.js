import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Works from './pages/Works/Works';

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/works" element={<Works />}></Route>
                    </Routes>
                </div>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
