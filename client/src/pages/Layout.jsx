// src/pages/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MobileActionBar from '../components/MobileActionBar';
import FooterDesktop from '../components/FooterDesktop';
import SectionIndicator from '../components/SectionIndicator';
import { fetchListFoods } from '../utils/api/handlersRequests/handlerFoods';
import { useEffect } from 'react';
import { setAllProducts } from '../state/slices/products/products';
import { useDispatch, useSelector } from 'react-redux';
import ChatButton from '../components/ChatButton';
import { useContext } from 'react';
import { AuthContext } from '../contextAuth/AuthContext';
import Login from './Login';

const Layout = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const { isAuthenticated } = useContext(AuthContext);

   
    useEffect(() => {
        if (isAuthenticated) {  
            fetchListFoods(products, dispatch, setAllProducts);
        }
    }, [dispatch, products, isAuthenticated]); 

    return (
        <div className="flex flex-col h-screen">
            {isAuthenticated ? (
                <>
                    <header>
                        <Navbar />
                    </header>
                    <main className='h-full flex flex-col max-w-full overflow-hidden sm:overflow-visible px-4 sm:px-20 md:px-[8.75rem] py-4 grow sm:grow-0'>
                        <SectionIndicator />
                        <Outlet />
                        <ChatButton />
                    </main>
                    <footer className="w-full sm:h-[10vh] flex items-center">
                        <div className='sm:hidden w-full'>
                            <MobileActionBar />
                        </div>
                        <FooterDesktop />
                    </footer>
                </>
            ) : (
                <div className="flex justify-center items-center h-full px-4"> {/* Centrar el Login */}
                    <Login />
                </div>
            )}
        </div>
    );
}

export default Layout;
