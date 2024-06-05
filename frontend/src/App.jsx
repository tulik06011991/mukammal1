import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import PostProducts from './Admin/PostProducts';
import Service from './components/Service';

import ProductContextProvider from './components/context/ProductContextProvider';
import UsersAllData from './Admin/UsersAllData';
import Cart from './components/Cart';


function App() {
    return (
        <>
            <ProductContextProvider>
           
                <Navbar />
                <Routes>
                    <Route path='/' element={<Menu />} />
                    <Route path='/about' element={<About />} />
                    <Route path ='/postProducts' element ={<PostProducts/>}/>
                    <Route path ='/service' element ={<Service/>}/>
                    <Route path ='/contact' element ={<Contact/>}/>
                    <Route path='/usersAlldata' element = {<UsersAllData/>}/>
                    <Route path='/carta' element = {<Cart/>}/>
                </Routes>
                <Footer />
              
            </ProductContextProvider>
        </>
    );
}

export default App;
