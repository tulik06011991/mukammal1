import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import PostProducts from './Admin/PostProducts';
import ProductContextProvider from './components/context/ProductContextProvider';

function App() {
    return (
        <>
            <ProductContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Menu />} />
                    <Route path='/about' element={<About />} />
                    <Route path ='/postProducts' element ={<PostProducts/>}/>
                </Routes>
                <Footer />
            </ProductContextProvider>
        </>
    );
}

export default App;
